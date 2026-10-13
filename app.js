// ==========================================================================
// MARATHON - Core Application Logic & State Engine
// Built for Pratyush Tiwari's CS & ML Mastery Odyssey
// ==========================================================================

(() => {
  'use strict';

  const STORAGE_KEY = 'marathon_tracker_data_v1';

  // Application State
  const AppState = {
    currentTab: 'phase1',
    activeFilter: 'all',
    activeDiff: 'all',
    searchQuery: '',
    soundEnabled: true,
    allExpanded: false,
    
    // Persistent Data Model
    data: {
      userName: 'Pratyush Tiwari',
      statuses: {},       // { [id]: 'todo' | 'inprogress' | 'solved' | 'revision' }
      starred: {},        // { [id]: boolean }
      notes: {},          // { [id]: { timeComp, spaceComp, text, codeUrl, updated } }
      activityLog: {},    // { [YYYY-MM-DD]: count }
      customProblems: [], // array of custom problems
      pomodoro: {
        sessionsToday: 0,
        lastDate: ''
      },
      streakDays: 1,
      lastActiveDate: ''
    },

    // Pomodoro Timer Runtime State
    pomo: {
      mode: 'work', // 'work' | 'short' | 'long'
      durations: { work: 25 * 60, short: 5 * 60, long: 15 * 60 },
      remaining: 25 * 60,
      isRunning: false,
      intervalId: null
    },

    // Currently opened modal problem ID
    activeModalProblemId: null
  };

  // Helper: Get Today's Date String (YYYY-MM-DD)
  function getTodayDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Load state from localStorage
  function loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        AppState.data = {
          ...AppState.data,
          ...parsed,
          statuses: parsed.statuses || {},
          starred: parsed.starred || {},
          notes: parsed.notes || {},
          activityLog: parsed.activityLog || {},
          customProblems: parsed.customProblems || [],
          pomodoro: parsed.pomodoro || { sessionsToday: 0, lastDate: '' }
        };
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
    }

    // Check streak & today's date
    const today = getTodayDateString();
    if (AppState.data.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
      
      if (AppState.data.lastActiveDate === yesterdayStr) {
        // Streak preserved
      } else if (!AppState.data.lastActiveDate) {
        AppState.data.streakDays = 1;
      }
      // If new day, reset pomodoro sessions
      if (AppState.data.pomodoro.lastDate !== today) {
        AppState.data.pomodoro.sessionsToday = 0;
        AppState.data.pomodoro.lastDate = today;
      }
    }
  }

  // Save state to localStorage
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState.data));
    } catch (e) {
      console.error('Error saving state:', e);
    }
  }

  // Audio Feedback Synthesizer using Web Audio API
  let audioCtx = null;
  function playAudioTone(type = 'success') {
    if (!AppState.soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'success') {
        // High, bright ascending harmonic chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.12); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'uncheck') {
        // Subtle low pop
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440.00, now);
        osc.frequency.exponentialRampToValueAtTime(320.00, now + 0.08);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'pomo') {
        // Chime for timer finish
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.15); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.3); // G5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      }
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  // Toast Notification System
  function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : 'ℹ'}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Get Flat List of All Problems (Phase 1, Phase 2, Custom)
  function getAllProblems() {
    const list = [];
    
    // Phase 1
    if (typeof DSA_SHEET_DATA !== 'undefined') {
      DSA_SHEET_DATA.forEach(step => {
        step.modules.forEach(mod => {
          mod.problems.forEach(prob => {
            list.push({
              ...prob,
              stepId: step.stepId,
              stepTitle: step.title,
              moduleId: mod.moduleId,
              moduleTitle: mod.title,
              phase: 1
            });
          });
        });
      });
    }

    // Phase 2
    if (typeof PHASE2_DATA !== 'undefined') {
      PHASE2_DATA.forEach(track => {
        track.modules.forEach(mod => {
          mod.items.forEach(item => {
            list.push({
              ...item,
              stepId: track.trackId,
              stepTitle: track.trackTitle,
              moduleId: mod.moduleId,
              moduleTitle: mod.title,
              phase: 2
            });
          });
        });
      });
    }

    // Custom problems
    (AppState.data.customProblems || []).forEach(cp => {
      list.push(cp);
    });

    return list;
  }

  // Find Problem By ID
  function getProblemById(id) {
    const all = getAllProblems();
    return all.find(p => p.id === id);
  }

  // Status cycling: todo -> inprogress -> solved -> revision -> todo
  function cycleProblemStatus(id) {
    const current = AppState.data.statuses[id] || 'todo';
    let next = 'todo';
    if (current === 'todo') next = 'solved'; // Quick-toggle directly to solved!
    else if (current === 'solved') next = 'todo';
    else if (current === 'inprogress') next = 'solved';
    else if (current === 'revision') next = 'solved';

    setProblemStatus(id, next);
  }

  // Set explicit status for a problem
  function setProblemStatus(id, status) {
    const previous = AppState.data.statuses[id] || 'todo';
    AppState.data.statuses[id] = status;

    const today = getTodayDateString();

    // Log solve activity
    if (status === 'solved' && previous !== 'solved') {
      AppState.data.activityLog[today] = (AppState.data.activityLog[today] || 0) + 1;
      AppState.data.lastActiveDate = today;
      playAudioTone('success');
      showToast('Problem marked as Solved! 🚀');
    } else if (previous === 'solved' && status !== 'solved') {
      if (AppState.data.activityLog[today] && AppState.data.activityLog[today] > 0) {
        AppState.data.activityLog[today] -= 1;
      }
      playAudioTone('uncheck');
    }

    saveState();
    updateUI();
  }

  // Toggle Star on a problem
  function toggleProblemStar(id) {
    const current = !!AppState.data.starred[id];
    AppState.data.starred[id] = !current;
    saveState();
    updateUI();
    showToast(current ? 'Removed from Starred' : 'Added to Starred Priority ⭐', 'info');
  }

  // Calculate Comprehensive Metrics
  function computeMetrics() {
    const all = getAllProblems();
    const phase1Items = all.filter(p => p.phase === 1);
    const phase2Items = all.filter(p => p.phase === 2);

    const relevant = AppState.currentTab === 'phase2' ? phase2Items : phase1Items;

    let solvedCount = 0;
    let inProgressCount = 0;
    let revisionCount = 0;
    let easySolved = 0, easyTotal = 0;
    let medSolved = 0, medTotal = 0;
    let hardSolved = 0, hardTotal = 0;

    relevant.forEach(p => {
      const st = AppState.data.statuses[p.id] || 'todo';
      if (st === 'solved') solvedCount++;
      if (st === 'inprogress') inProgressCount++;
      if (st === 'revision') revisionCount++;

      if (p.diff === 'Easy') {
        easyTotal++;
        if (st === 'solved') easySolved++;
      } else if (p.diff === 'Medium') {
        medTotal++;
        if (st === 'solved') medSolved++;
      } else if (p.diff === 'Hard') {
        hardTotal++;
        if (st === 'solved') hardSolved++;
      }
    });

    const totalCount = relevant.length;
    const remainingCount = totalCount - solvedCount;
    const percentage = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

    // Overall Revision Deck count across both phases
    let totalRevisionInDeck = 0;
    all.forEach(p => {
      const st = AppState.data.statuses[p.id];
      const isStar = AppState.data.starred[p.id];
      if (st === 'revision' || isStar) {
        totalRevisionInDeck++;
      }
    });

    // Today's solves
    const today = getTodayDateString();
    const todaySolved = AppState.data.activityLog[today] || 0;

    return {
      totalCount,
      solvedCount,
      remainingCount,
      percentage,
      easySolved,
      easyTotal,
      medSolved,
      medTotal,
      hardSolved,
      hardTotal,
      totalRevisionInDeck,
      todaySolved
    };
  }

  // Update Hero Section, Badges & Progress Dial
  function updateHeroMetrics() {
    const metrics = computeMetrics();

    // Dial SVG calculations (Circumference of r=50 is ~314.159)
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (metrics.percentage / 100) * circumference;
    const ringCircle = document.getElementById('heroRingCircle');
    if (ringCircle) {
      ringCircle.style.strokeDashoffset = offset;
    }

    const heroPercentVal = document.getElementById('heroPercentVal');
    if (heroPercentVal) heroPercentVal.textContent = `${metrics.percentage}%`;

    // Counters
    document.getElementById('statSolvedCount').textContent = metrics.solvedCount;
    document.getElementById('statTotalTarget').textContent = `of ${metrics.totalCount} items`;
    document.getElementById('statRemainingCount').textContent = metrics.remainingCount;
    document.getElementById('statTodaySolved').textContent = metrics.todaySolved;
    document.getElementById('statStreakDays').textContent = `${AppState.data.streakDays} ${AppState.data.streakDays === 1 ? 'Day' : 'Days'}`;

    // Tab Headers & Subtitles
    const titleEl = document.getElementById('heroCurrentTabTitle');
    const descEl = document.getElementById('heroCurrentTabDesc');
    if (AppState.currentTab === 'phase1') {
      titleEl.textContent = "Phase 1: Striver's A2Z DSA Sheet";
      descEl.textContent = "Master all 19 Steps: Arrays, Binary Search, Trees, Graphs, Dynamic Programming & interview paradigms.";
      document.getElementById('streakSubText').textContent = "Phase 1: DSA Sheet";
    } else if (AppState.currentTab === 'phase2') {
      titleEl.textContent = "Phase 2: Python, ML & Continuous DSA";
      descEl.textContent = "Python internals, classical ML, PyTorch deep learning, Transformers, MLOps, and weekly contest grinding.";
      document.getElementById('streakSubText').textContent = "Phase 2: Python & ML";
    } else if (AppState.currentTab === 'revision') {
      titleEl.textContent = "Revision Deck (Spaced Repetition)";
      descEl.textContent = "Review high-yield problems, notes, and edge cases flagged for revision.";
      document.getElementById('streakSubText').textContent = "Memory Reinforcement";
    } else if (AppState.currentTab === 'analytics') {
      titleEl.textContent = "Activity Heatmap & Velocity Analytics";
      descEl.textContent = "Track your daily consistency, category breakdown, and study stamina.";
      document.getElementById('streakSubText').textContent = "Consistency Tracker";
    }

    // Difficulty Bars
    const easyPercent = metrics.easyTotal > 0 ? Math.round((metrics.easySolved / metrics.easyTotal) * 100) : 0;
    const medPercent = metrics.medTotal > 0 ? Math.round((metrics.medSolved / metrics.medTotal) * 100) : 0;
    const hardPercent = metrics.hardTotal > 0 ? Math.round((metrics.hardSolved / metrics.hardTotal) * 100) : 0;

    document.getElementById('diffCountEasy').textContent = `${metrics.easySolved} / ${metrics.easyTotal} (${easyPercent}%)`;
    document.getElementById('diffBarEasy').style.width = `${easyPercent}%`;

    document.getElementById('diffCountMedium').textContent = `${metrics.medSolved} / ${metrics.medTotal} (${medPercent}%)`;
    document.getElementById('diffBarMedium').style.width = `${medPercent}%`;

    document.getElementById('diffCountHard').textContent = `${metrics.hardSolved} / ${metrics.hardTotal} (${hardPercent}%)`;
    document.getElementById('diffBarHard').style.width = `${hardPercent}%`;

    // Revision badge count
    const badgeRev = document.getElementById('badgeRevisionCount');
    if (badgeRev) badgeRev.textContent = metrics.totalRevisionInDeck;
  }

  // Check if a problem satisfies active filters
  function matchesFilter(prob) {
    const status = AppState.data.statuses[prob.id] || 'todo';
    const isStarred = !!AppState.data.starred[prob.id];

    // Status filter
    if (AppState.activeFilter === 'todo' && status !== 'todo') return false;
    if (AppState.activeFilter === 'inprogress' && status !== 'inprogress') return false;
    if (AppState.activeFilter === 'solved' && status !== 'solved') return false;
    if (AppState.activeFilter === 'revision' && status !== 'revision') return false;
    if (AppState.activeFilter === 'starred' && !isStarred) return false;

    // Difficulty filter
    if (AppState.activeDiff !== 'all' && prob.diff !== AppState.activeDiff) return false;

    // Search query
    if (AppState.searchQuery) {
      const q = AppState.searchQuery.toLowerCase();
      const titleMatch = prob.title.toLowerCase().includes(q);
      const topicMatch = (prob.topic || '').toLowerCase().includes(q);
      const modMatch = (prob.moduleTitle || '').toLowerCase().includes(q);
      const stepMatch = (prob.stepTitle || '').toLowerCase().includes(q);
      if (!titleMatch && !topicMatch && !modMatch && !stepMatch) return false;
    }

    return true;
  }

  // Render Problem Row HTML
  function renderProblemRow(prob) {
    const status = AppState.data.statuses[prob.id] || 'todo';
    const isStarred = !!AppState.data.starred[prob.id];
    const notesData = AppState.data.notes[prob.id];
    const hasNotes = notesData && (notesData.text || notesData.timeComp || notesData.spaceComp || notesData.codeUrl);

    let statusClass = '';
    let statusIcon = '○';
    let rowStateClass = '';

    if (status === 'solved') {
      statusClass = 'state-solved';
      statusIcon = '✓';
      rowStateClass = 'is-solved';
    } else if (status === 'inprogress') {
      statusClass = 'state-inprogress';
      statusIcon = '◐';
    } else if (status === 'revision') {
      statusClass = 'state-revision';
      statusIcon = '↻';
      rowStateClass = 'is-revision';
    }

    const resourceLink = prob.tuf || prob.resource || '#';

    return `
      <div class="problem-row ${rowStateClass}" id="row-${prob.id}" data-id="${prob.id}">
        <!-- Cycle Status Button -->
        <button class="status-cycle-btn ${statusClass}" title="Click to toggle Solved / In Progress" data-action="toggle-status" data-id="${prob.id}">
          ${statusIcon}
        </button>

        <!-- Problem Info -->
        <div class="problem-info" data-action="open-notes" data-id="${prob.id}" style="cursor: pointer;">
          <a href="${resourceLink}" target="_blank" rel="noopener noreferrer" class="problem-title-text" title="${prob.title}" onclick="event.stopPropagation();">
            ${prob.title}
          </a>
          <div class="problem-meta-tags">
            <span class="topic-tag">${prob.topic || 'General'}</span>
            ${notesData && notesData.timeComp ? `<span class="complexity-pill-tag">T: ${notesData.timeComp}</span>` : ''}
            ${notesData && notesData.spaceComp ? `<span class="complexity-pill-tag">S: ${notesData.spaceComp}</span>` : ''}
          </div>
        </div>

        <!-- Difficulty Badge -->
        <span class="diff-badge ${prob.diff}">${prob.diff}</span>

        <!-- Row Actions -->
        <div class="row-actions-group">
          <!-- External Link Button -->
          ${resourceLink !== '#' ? `
            <a href="${resourceLink}" target="_blank" rel="noopener noreferrer" class="action-tool-btn" title="Open Resource / Tutorial">
              ↗
            </a>
          ` : ''}

          <!-- Notes Button -->
          <button class="action-tool-btn ${hasNotes ? 'has-notes' : ''}" title="${hasNotes ? 'Edit Notes (Has Saved Notes)' : 'Add Notes & Complexity'}" data-action="open-notes" data-id="${prob.id}">
            📝
          </button>

          <!-- Star Button -->
          <button class="action-tool-btn ${isStarred ? 'is-starred' : ''}" title="Star as High Priority" data-action="toggle-star" data-id="${prob.id}">
            ${isStarred ? '★' : '☆'}
          </button>
        </div>
      </div>
    `;
  }

  // Render Phase 1: Striver A2Z Steps
  function renderPhase1() {
    const container = document.getElementById('phase1StepsList');
    if (!container || typeof DSA_SHEET_DATA === 'undefined') return;

    let html = '';

    DSA_SHEET_DATA.forEach(step => {
      // Collect all problems in this step
      const stepProblems = [];
      step.modules.forEach(mod => {
        mod.problems.forEach(p => {
          stepProblems.push({
            ...p,
            stepId: step.stepId,
            stepTitle: step.title,
            moduleId: mod.moduleId,
            moduleTitle: mod.title,
            phase: 1
          });
        });
      });

      // Calculate step progress
      const solvedInStep = stepProblems.filter(p => (AppState.data.statuses[p.id] || 'todo') === 'solved').length;
      const totalInStep = stepProblems.length;
      const percentInStep = totalInStep > 0 ? Math.round((solvedInStep / totalInStep) * 100) : 0;

      // Filter matching
      const matchingProblems = stepProblems.filter(matchesFilter);
      const isVisible = matchingProblems.length > 0;
      if (!isVisible && (AppState.searchQuery || AppState.activeFilter !== 'all' || AppState.activeDiff !== 'all')) {
        return; // Skip step if no items match active filter
      }

      const isExpanded = AppState.allExpanded || step.stepId === 1 || AppState.searchQuery.length > 0;

      html += `
        <div class="step-accordion ${isExpanded ? 'is-expanded' : ''}" id="step-acc-${step.stepId}">
          <div class="step-header" data-action="toggle-step" data-step-id="${step.stepId}">
            <div class="step-header-left">
              <span class="step-num-badge">STEP ${step.stepId}</span>
              <div class="step-title-group">
                <span class="step-title-text">${step.title}</span>
                <span class="step-desc-text">${step.desc}</span>
              </div>
            </div>
            <div class="step-header-right">
              <div class="step-progress-indicator">
                <span class="step-progress-text"><strong>${solvedInStep}</strong> / ${totalInStep} (${percentInStep}%)</span>
                <div class="step-progress-track">
                  <div class="step-progress-fill" style="width: ${percentInStep}%;"></div>
                </div>
              </div>
              <span class="step-chevron">▼</span>
            </div>
          </div>

          <div class="step-content">
            ${step.modules.map(mod => {
              const modProblems = mod.problems.map(p => ({
                ...p,
                stepId: step.stepId,
                stepTitle: step.title,
                moduleId: mod.moduleId,
                moduleTitle: mod.title,
                phase: 1
              })).filter(matchesFilter);

              if (modProblems.length === 0) return '';

              return `
                <div class="module-group">
                  <div class="module-header">
                    <span class="module-title">${mod.title}</span>
                    <span class="module-count">${modProblems.length} ${modProblems.length === 1 ? 'task' : 'tasks'}</span>
                  </div>
                  <div class="problems-list">
                    ${modProblems.map(p => renderProblemRow(p)).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    if (!html) {
      container.innerHTML = `
        <div class="empty-state-wrap">
          <span class="empty-state-icon">🔍</span>
          <p class="empty-state-text">No problems match your current search or filter criteria in Phase 1.</p>
          <button class="btn-secondary" id="clearFiltersBtn">Reset All Filters</button>
        </div>
      `;
    } else {
      container.innerHTML = html;
    }
  }

  // Render Phase 2: Python & ML Tracks
  function renderPhase2() {
    const container = document.getElementById('phase2TracksList');
    if (!container || typeof PHASE2_DATA === 'undefined') return;

    let html = '';

    PHASE2_DATA.forEach(track => {
      const trackProblems = [];
      track.modules.forEach(mod => {
        mod.items.forEach(item => {
          trackProblems.push({
            ...item,
            stepId: track.trackId,
            stepTitle: track.trackTitle,
            moduleId: mod.moduleId,
            moduleTitle: mod.title,
            phase: 2
          });
        });
      });

      const solvedInTrack = trackProblems.filter(p => (AppState.data.statuses[p.id] || 'todo') === 'solved').length;
      const totalInTrack = trackProblems.length;
      const percentInTrack = totalInTrack > 0 ? Math.round((solvedInTrack / totalInTrack) * 100) : 0;

      const matchingItems = trackProblems.filter(matchesFilter);
      if (matchingItems.length === 0 && (AppState.searchQuery || AppState.activeFilter !== 'all' || AppState.activeDiff !== 'all')) {
        return;
      }

      html += `
        <div class="track-card" id="track-${track.trackId}">
          <div class="track-banner">
            <div class="track-info">
              <h2 class="track-title">${track.trackTitle}</h2>
              <p class="track-desc">${track.desc}</p>
            </div>
            <div class="step-progress-indicator" style="min-width: 160px;">
              <span class="step-progress-text"><strong>${solvedInTrack}</strong> / ${totalInTrack} (${percentInTrack}%)</span>
              <div class="step-progress-track">
                <div class="step-progress-fill" style="width: ${percentInTrack}%;"></div>
              </div>
            </div>
          </div>

          <div style="padding: 24px;">
            ${track.modules.map(mod => {
              const modItems = mod.items.map(i => ({
                ...i,
                stepId: track.trackId,
                stepTitle: track.trackTitle,
                moduleId: mod.moduleId,
                moduleTitle: mod.title,
                phase: 2
              })).filter(matchesFilter);

              if (modItems.length === 0) return '';

              return `
                <div class="module-group" style="margin-top: 16px;">
                  <div class="module-header">
                    <span class="module-title">${mod.title}</span>
                    <span class="module-count">${modItems.length} items</span>
                  </div>
                  <div class="problems-list">
                    ${modItems.map(p => renderProblemRow(p)).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    if (!html) {
      container.innerHTML = `
        <div class="empty-state-wrap">
          <span class="empty-state-icon">🔍</span>
          <p class="empty-state-text">No items match your filters in Phase 2.</p>
          <button class="btn-secondary" id="clearFiltersBtn">Reset All Filters</button>
        </div>
      `;
    } else {
      container.innerHTML = html;
    }
  }

  // Render Revision Deck
  function renderRevisionDeck() {
    const grid = document.getElementById('revisionDeckGrid');
    if (!grid) return;

    const all = getAllProblems();
    const revisionItems = all.filter(p => {
      const st = AppState.data.statuses[p.id];
      const star = AppState.data.starred[p.id];
      return st === 'revision' || star;
    });

    if (revisionItems.length === 0) {
      grid.innerHTML = `
        <div class="empty-state-wrap" style="grid-column: 1 / -1;">
          <span class="empty-state-icon">✨</span>
          <p class="empty-state-text">
            No problems queued for revision yet! You can mark any problem as 🟣 <strong>Needs Revision</strong> or ⭐ <strong>Starred</strong> to add it to this deck.
          </p>
        </div>
      `;
      return;
    }

    grid.innerHTML = revisionItems.map(p => {
      const notesData = AppState.data.notes[p.id];
      const hasNotes = notesData && (notesData.text || notesData.timeComp);
      const isStarred = !!AppState.data.starred[p.id];

      return `
        <div class="flashcard-item">
          <div class="flashcard-header">
            <div>
              <span class="diff-badge ${p.diff}">${p.diff}</span>
              <span class="topic-tag" style="margin-left: 6px;">${p.topic || 'DSA'}</span>
            </div>
            ${isStarred ? '<span style="color: var(--accent-amber); font-size: 1.1rem;">★</span>' : ''}
          </div>

          <h3 class="flashcard-title">${p.title}</h3>

          ${hasNotes ? `
            <div class="flashcard-notes-preview">
              ${notesData.timeComp ? `<div><strong>Time:</strong> ${notesData.timeComp} | <strong>Space:</strong> ${notesData.spaceComp || 'N/A'}</div>` : ''}
              <div>${notesData.text || 'No approach notes written yet.'}</div>
            </div>
          ` : `
            <div style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">
              Click notes to document your intuition and solution breakdown.
            </div>
          `}

          <div class="flashcard-footer">
            <button class="btn-secondary" style="font-size: 0.75rem; padding: 6px 10px;" data-action="open-notes" data-id="${p.id}">
              📝 Notes
            </button>
            <div style="display: flex; gap: 8px;">
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 6px 10px; color: var(--accent-emerald);" data-action="mark-mastered" data-id="${p.id}">
                ✓ Mastered
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Annual Heatmap (365 days commit-style squares)
  function renderHeatmap() {
    const grid = document.getElementById('studyHeatmapGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const today = new Date();
    const daysToShow = 364; // 52 weeks * 7 days

    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - daysToShow);

    for (let i = 0; i <= daysToShow; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);

      const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const count = AppState.data.activityLog[dStr] || 0;

      let level = '';
      if (count >= 7) level = 'level-4';
      else if (count >= 4) level = 'level-3';
      else if (count >= 2) level = 'level-2';
      else if (count >= 1) level = 'level-1';

      const cell = document.createElement('div');
      cell.className = `heatmap-cell ${level}`;
      cell.title = `${dStr}: ${count} problems solved`;
      grid.appendChild(cell);
    }
  }

  // Render Category Bars in Analytics
  function renderCategoryBars() {
    const container = document.getElementById('categoryBarsGrid');
    if (!container || typeof DSA_SHEET_DATA === 'undefined') return;

    const items = [];

    // All Phase 1 Steps
    DSA_SHEET_DATA.forEach(step => {
      let solved = 0;
      let total = 0;
      step.modules.forEach(m => {
        m.problems.forEach(p => {
          total++;
          if ((AppState.data.statuses[p.id] || 'todo') === 'solved') solved++;
        });
      });
      const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
      items.push({ name: step.title, solved, total, pct });
    });

    container.innerHTML = items.map(cat => `
      <div class="category-bar-box">
        <div class="cat-bar-header">
          <span style="color: var(--text-high); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">
            ${cat.name}
          </span>
          <span style="font-family: var(--font-mono); color: var(--accent-cyan); font-size: 0.75rem;">
            ${cat.solved}/${cat.total} (${cat.pct}%)
          </span>
        </div>
        <div class="diff-track">
          <div class="diff-fill fill-easy" style="width: ${cat.pct}%;"></div>
        </div>
      </div>
    `).join('');
  }

  // Populate Quick Jump Dropdown
  function populateQuickJump() {
    const select = document.getElementById('quickJumpSelect');
    const customSectionSelect = document.getElementById('customSectionSelect');
    if (!select) return;

    let options = '<option value="">Jump to Section...</option>';
    let customOptions = '';

    if (AppState.currentTab === 'phase1' && typeof DSA_SHEET_DATA !== 'undefined') {
      DSA_SHEET_DATA.forEach(step => {
        options += `<option value="step-acc-${step.stepId}">${step.title}</option>`;
        customOptions += `<option value="step-${step.stepId}">${step.title}</option>`;
      });
    } else if (typeof PHASE2_DATA !== 'undefined') {
      PHASE2_DATA.forEach(track => {
        options += `<option value="track-${track.trackId}">${track.trackTitle}</option>`;
        customOptions += `<option value="track-${track.trackId}">${track.trackTitle}</option>`;
      });
    }

    select.innerHTML = options;
    if (customSectionSelect) customSectionSelect.innerHTML = customOptions;
  }

  // Main UI Update Dispatcher
  function updateUI() {
    updateHeroMetrics();

    if (AppState.currentTab === 'phase1') {
      renderPhase1();
    } else if (AppState.currentTab === 'phase2') {
      renderPhase2();
    } else if (AppState.currentTab === 'revision') {
      renderRevisionDeck();
    } else if (AppState.currentTab === 'analytics') {
      renderHeatmap();
      renderCategoryBars();
    }
  }

  // Switch Active Tab
  function switchTab(tabId) {
    AppState.currentTab = tabId;

    // Toggle active tab buttons
    document.querySelectorAll('.phase-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Toggle view panels
    const views = {
      phase1: document.getElementById('phase1View'),
      phase2: document.getElementById('phase2View'),
      revision: document.getElementById('revisionView'),
      analytics: document.getElementById('analyticsView')
    };

    Object.keys(views).forEach(k => {
      if (views[k]) {
        views[k].style.display = k === tabId ? 'block' : 'none';
      }
    });

    populateQuickJump();
    updateUI();
  }

  // Open Notes Modal for Problem
  function openNotesModal(problemId) {
    const prob = getProblemById(problemId);
    if (!prob) return;

    AppState.activeModalProblemId = problemId;

    const modal = document.getElementById('notesModalOverlay');
    document.getElementById('modalNoteProblemTitle').textContent = prob.title;
    document.getElementById('modalNoteTopicTag').textContent = `${prob.diff.toUpperCase()} • ${prob.topic || 'DSA'}`;

    const currentStatus = AppState.data.statuses[problemId] || 'todo';
    document.getElementById('modalStatusSelect').value = currentStatus;

    const isStarred = !!AppState.data.starred[problemId];
    document.getElementById('modalStarIcon').textContent = isStarred ? '★' : '☆';
    document.getElementById('modalStarLabel').textContent = isStarred ? 'Starred (Priority)' : 'Star as High Priority';

    const savedNotes = AppState.data.notes[problemId] || {};
    document.getElementById('modalTimeComplexity').value = savedNotes.timeComp || '';
    document.getElementById('modalSpaceComplexity').value = savedNotes.spaceComp || '';
    document.getElementById('modalNotesText').value = savedNotes.text || '';
    document.getElementById('modalCodeUrl').value = savedNotes.codeUrl || '';

    modal.classList.add('is-open');
  }

  function closeNotesModal() {
    const modal = document.getElementById('notesModalOverlay');
    if (modal) modal.classList.remove('is-open');
    AppState.activeModalProblemId = null;
  }

  function saveNotesModal() {
    const id = AppState.activeModalProblemId;
    if (!id) return;

    const status = document.getElementById('modalStatusSelect').value;
    const timeComp = document.getElementById('modalTimeComplexity').value.trim();
    const spaceComp = document.getElementById('modalSpaceComplexity').value.trim();
    const text = document.getElementById('modalNotesText').value.trim();
    const codeUrl = document.getElementById('modalCodeUrl').value.trim();

    AppState.data.notes[id] = {
      timeComp,
      spaceComp,
      text,
      codeUrl,
      updated: Date.now()
    };

    setProblemStatus(id, status);
    closeNotesModal();
    showToast('Notes & progress saved successfully!');
  }

  // Pomodoro Timer Engine
  function initPomodoro() {
    function formatTime(seconds) {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function updatePomoDisplays() {
      const timeStr = formatTime(AppState.pomo.remaining);
      const headerDisp = document.getElementById('pomoHeaderDisplay');
      const largeDisp = document.getElementById('pomoLargeTimer');
      if (headerDisp) headerDisp.textContent = timeStr;
      if (largeDisp) largeDisp.textContent = timeStr;
    }

    function startTimer() {
      if (AppState.pomo.isRunning) return;
      AppState.pomo.isRunning = true;
      document.getElementById('pomoStartPauseBtn').textContent = '⏸ Pause Session';

      AppState.pomo.intervalId = setInterval(() => {
        if (AppState.pomo.remaining > 0) {
          AppState.pomo.remaining--;
          updatePomoDisplays();
        } else {
          // Timer finished
          clearInterval(AppState.pomo.intervalId);
          AppState.pomo.isRunning = false;
          playAudioTone('pomo');

          if (AppState.pomo.mode === 'work') {
            AppState.data.pomodoro.sessionsToday = (AppState.data.pomodoro.sessionsToday || 0) + 1;
            saveState();
            document.getElementById('pomoSessionsCount').textContent = AppState.data.pomodoro.sessionsToday;
            showToast('🔥 Grind session finished! Great job Pratyush. Take a break.');
          } else {
            showToast('Break finished! Ready to solve more problems?');
          }

          document.getElementById('pomoStartPauseBtn').textContent = '▶ Start Session';
        }
      }, 1000);
    }

    function pauseTimer() {
      clearInterval(AppState.pomo.intervalId);
      AppState.pomo.isRunning = false;
      document.getElementById('pomoStartPauseBtn').textContent = '▶ Resume Session';
    }

    function resetTimer() {
      pauseTimer();
      AppState.pomo.remaining = AppState.pomo.durations[AppState.pomo.mode];
      updatePomoDisplays();
      document.getElementById('pomoStartPauseBtn').textContent = '▶ Start Session';
    }

    // Bind Pomo controls
    const startPauseBtn = document.getElementById('pomoStartPauseBtn');
    if (startPauseBtn) {
      startPauseBtn.addEventListener('click', () => {
        if (AppState.pomo.isRunning) pauseTimer();
        else startTimer();
      });
    }

    const resetBtn = document.getElementById('pomoResetBtn');
    if (resetBtn) resetBtn.addEventListener('click', resetTimer);

    document.querySelectorAll('[data-pomo-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-pomo-mode]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.pomo.mode = btn.dataset.pomoMode;
        resetTimer();
      });
    });

    document.getElementById('pomoOpenBtn').addEventListener('click', () => {
      document.getElementById('pomoSessionsCount').textContent = AppState.data.pomodoro.sessionsToday || 0;
      document.getElementById('pomoModalOverlay').classList.add('is-open');
    });

    document.getElementById('closePomoModalBtn').addEventListener('click', () => {
      document.getElementById('pomoModalOverlay').classList.remove('is-open');
    });

    updatePomoDisplays();
  }

  // Backup & JSON Sync
  function initBackupSync() {
    const backupModal = document.getElementById('backupModalOverlay');
    document.getElementById('backupModalBtn').addEventListener('click', () => {
      backupModal.classList.add('is-open');
    });
    document.getElementById('closeBackupModalBtn').addEventListener('click', () => {
      backupModal.classList.remove('is-open');
    });
    document.getElementById('closeBackupFooterBtn').addEventListener('click', () => {
      backupModal.classList.remove('is-open');
    });

    // Export JSON
    document.getElementById('exportJsonBtn').addEventListener('click', () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(AppState.data, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `marathon-pratyush-backup-${getTodayDateString()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('JSON backup exported successfully! 📁');
    });

    // Import JSON
    const importInput = document.getElementById('importJsonInput');
    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            if (parsed && typeof parsed === 'object') {
              AppState.data = { ...AppState.data, ...parsed };
              saveState();
              updateUI();
              backupModal.classList.remove('is-open');
              showToast('Backup restored successfully! 🎉');
            }
          } catch (err) {
            alert('Invalid backup JSON file.');
          }
        };
        reader.readAsText(file);
      });
    }

    // Reset Progress
    document.getElementById('resetDataBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all tracked progress? This action cannot be undone unless you have a JSON backup.')) {
        AppState.data = {
          userName: 'Pratyush Tiwari',
          statuses: {},
          starred: {},
          notes: {},
          activityLog: {},
          customProblems: [],
          pomodoro: { sessionsToday: 0, lastDate: '' },
          streakDays: 1,
          lastActiveDate: ''
        };
        saveState();
        updateUI();
        backupModal.classList.remove('is-open');
        showToast('All data has been reset.');
      }
    });

    // Printable Summary
    const exportReportBtn = document.getElementById('exportReportBtn');
    if (exportReportBtn) {
      exportReportBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // Custom Problem Addition
  function initCustomProblem() {
    const overlay = document.getElementById('customProblemOverlay');
    const openBtn = document.getElementById('addCustomProblemBtn');
    const closeBtn = document.getElementById('closeCustomModalBtn');
    const cancelBtn = document.getElementById('cancelCustomModalBtn');
    const saveBtn = document.getElementById('saveCustomProblemBtn');

    openBtn.addEventListener('click', () => {
      overlay.classList.add('is-open');
    });

    const closeModal = () => overlay.classList.remove('is-open');
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    saveBtn.addEventListener('click', () => {
      const title = document.getElementById('customTitleInput').value.trim();
      const diff = document.getElementById('customDiffSelect').value;
      const link = document.getElementById('customLinkInput').value.trim();
      const section = document.getElementById('customSectionSelect').value;

      if (!title) {
        alert('Please enter a problem title.');
        return;
      }

      const newId = `custom-${Date.now()}`;
      const newProblem = {
        id: newId,
        title,
        diff,
        topic: 'Custom',
        tuf: link || '#',
        stepId: section,
        stepTitle: 'Custom Added',
        moduleId: 'custom',
        moduleTitle: 'Personal Practice',
        phase: AppState.currentTab === 'phase2' ? 2 : 1
      };

      AppState.data.customProblems.push(newProblem);
      saveState();
      closeModal();
      document.getElementById('customTitleInput').value = '';
      document.getElementById('customLinkInput').value = '';
      updateUI();
      showToast('Custom problem added to tracker!');
    });
  }

  // Global Event Listeners
  function attachGlobalListeners() {
    // Phase Navigation Tabs
    document.querySelectorAll('.phase-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // Status Filter Chips
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.activeFilter = btn.dataset.filter;
        updateUI();
      });
    });

    // Difficulty Filter Chips
    document.querySelectorAll('[data-diff]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-diff]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.activeDiff = btn.dataset.diff;
        updateUI();
      });
    });

    // Real-time Search Input
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');

    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.trim();
      searchClearBtn.style.display = AppState.searchQuery ? 'block' : 'none';
      updateUI();
    });

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      AppState.searchQuery = '';
      searchClearBtn.style.display = 'none';
      updateUI();
      searchInput.focus();
    });

    // Shortcut Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        closeNotesModal();
        document.getElementById('pomoModalOverlay').classList.remove('is-open');
        document.getElementById('backupModalOverlay').classList.remove('is-open');
        document.getElementById('customProblemOverlay').classList.remove('is-open');
      }
    });

    // Quick Jump Dropdown
    document.getElementById('quickJumpSelect').addEventListener('change', (e) => {
      const targetId = e.target.value;
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        // Expand if it's an accordion
        targetEl.classList.add('is-expanded');
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // Global Toggle All Steps
    document.getElementById('toggleAllStepsBtn').addEventListener('click', () => {
      AppState.allExpanded = !AppState.allExpanded;
      document.getElementById('toggleAllLabel').textContent = AppState.allExpanded ? 'Collapse All' : 'Expand All';
      document.getElementById('toggleAllIcon').textContent = AppState.allExpanded ? '📁' : '📂';
      document.querySelectorAll('.step-accordion').forEach(acc => {
        acc.classList.toggle('is-expanded', AppState.allExpanded);
      });
    });

    // Sound Toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    soundBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      document.getElementById('soundIcon').textContent = AppState.soundEnabled ? '🔔' : '🔕';
      showToast(AppState.soundEnabled ? 'Sound feedback enabled' : 'Sound muted', 'info');
    });

    // Delegated Clicks for Problems, Accordions, Modal Actions
    document.addEventListener('click', (e) => {
      // Step Accordion Header Toggle
      const stepHeader = e.target.closest('[data-action="toggle-step"]');
      if (stepHeader) {
        const stepId = stepHeader.dataset.stepId;
        const acc = document.getElementById(`step-acc-${stepId}`);
        if (acc) acc.classList.toggle('is-expanded');
        return;
      }

      // Status Cycle Button
      const statusBtn = e.target.closest('[data-action="toggle-status"]');
      if (statusBtn) {
        const id = statusBtn.dataset.id;
        cycleProblemStatus(id);
        return;
      }

      // Star Button
      const starBtn = e.target.closest('[data-action="toggle-star"]');
      if (starBtn) {
        const id = starBtn.dataset.id;
        toggleProblemStar(id);
        return;
      }

      // Open Notes Modal
      const notesBtn = e.target.closest('[data-action="open-notes"]');
      if (notesBtn) {
        const id = notesBtn.dataset.id;
        openNotesModal(id);
        return;
      }

      // Mark Mastered in Revision Deck
      const masterBtn = e.target.closest('[data-action="mark-mastered"]');
      if (masterBtn) {
        const id = masterBtn.dataset.id;
        AppState.data.statuses[id] = 'solved';
        AppState.data.starred[id] = false;
        saveState();
        updateUI();
        showToast('Problem mastered and completed! 🌟');
        return;
      }

      // Clear Filters Button in empty state
      if (e.target.id === 'clearFiltersBtn') {
        AppState.searchQuery = '';
        AppState.activeFilter = 'all';
        AppState.activeDiff = 'all';
        document.getElementById('searchInput').value = '';
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
        document.querySelectorAll('[data-diff]').forEach(b => b.classList.toggle('active', b.dataset.diff === 'all'));
        updateUI();
        return;
      }

      // Modal Background Click Dismiss
      if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('is-open');
      }
    });

    // Notes Modal Buttons
    document.getElementById('closeNotesModalBtn').addEventListener('click', closeNotesModal);
    document.getElementById('cancelNotesModalBtn').addEventListener('click', closeNotesModal);
    document.getElementById('saveNotesModalBtn').addEventListener('click', saveNotesModal);

    // Modal Star Toggle inside Notes
    document.getElementById('modalStarToggleBtn').addEventListener('click', () => {
      const id = AppState.activeModalProblemId;
      if (!id) return;
      const current = !!AppState.data.starred[id];
      AppState.data.starred[id] = !current;
      document.getElementById('modalStarIcon').textContent = !current ? '★' : '☆';
      document.getElementById('modalStarLabel').textContent = !current ? 'Starred (Priority)' : 'Star as High Priority';
    });

    // Refresh Revision Deck button
    const refreshRevBtn = document.getElementById('refreshRevisionDeckBtn');
    if (refreshRevBtn) {
      refreshRevBtn.addEventListener('click', () => {
        renderRevisionDeck();
        showToast('Revision deck synced!');
      });
    }
  }

  // Application Entry Point
  function init() {
    loadState();
    attachGlobalListeners();
    initPomodoro();
    initBackupSync();
    initCustomProblem();
    populateQuickJump();
    updateUI();
    console.log('MARATHON Tracker initialized for Pratyush Tiwari.');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
