/**
 * IT COMPANY — ENTERPRISE TECHNOLOGY DEMO WEBSITE
 * Main Interactive Vanilla JavaScript Library
 * Strictly Pure Vanilla JavaScript — Zero Frameworks / Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Navigation & Header Behavior
  // -------------------------------------------------------------------------
  const siteHeader = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

  // Sticky header background transition
  const handleScrollHeader = () => {
    if (!siteHeader) return;
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // Mobile menu open / close
  const toggleMobileNav = (open) => {
    if (!mobileDrawer || !mobileToggle) return;
    const shouldOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', shouldOpen);
    mobileToggle.classList.toggle('active', shouldOpen);
    if (mobileOverlay) mobileOverlay.classList.toggle('open', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
    mobileToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileNav());
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => toggleMobileNav(false));
  }

  // Close mobile nav on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      toggleMobileNav(false);
    }
  });

  // Mobile submenu accordion
  mobileSubmenuToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = btn.closest('.mobile-nav-item');
      if (parent) {
        const submenu = parent.querySelector('.mobile-submenu');
        if (submenu) {
          submenu.classList.toggle('open');
          const isExpanded = submenu.classList.contains('open');
          btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
      }
    });
  });

  // Highlight active link based on current page URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav-link, .mobile-submenu-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
      // If inside dropdown, also highlight parent nav-link
      const parentNavItem = link.closest('.nav-item');
      if (parentNavItem) {
        const parentLink = parentNavItem.querySelector('.nav-link');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  // -------------------------------------------------------------------------
  // 2. Scroll Reveal Animations (IntersectionObserver)
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // -------------------------------------------------------------------------
  // 3. Back to Top Button
  // -------------------------------------------------------------------------
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 4. FAQ Accordion Component
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');
    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other accordion items in the same container for clean UX
      const parent = item.closest('.faq-accordion');
      if (parent) {
        parent.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item && other.classList.contains('open')) {
            other.classList.remove('open');
            const otherBody = other.querySelector('.faq-body');
            if (otherBody) otherBody.style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = null;
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. Portfolio Filtering
  // -------------------------------------------------------------------------
  const portfolioFilterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-item-card');

  if (portfolioFilterBtns.length > 0 && portfolioCards.length > 0) {
    portfolioFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        portfolioFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter') || 'all';

        portfolioCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.style.display = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // 6. Technology Stack Filtering
  // -------------------------------------------------------------------------
  const techFilterBtns = document.querySelectorAll('.tech-filter-btn');
  const techCards = document.querySelectorAll('.tech-card');

  if (techFilterBtns.length > 0 && techCards.length > 0) {
    techFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        techFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-tech-category') || 'all';

        techCards.forEach(card => {
          const itemCat = card.getAttribute('data-tech-category') || '';
          if (cat === 'all' || itemCat === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // 7. Interactive Development Process Timeline
  // -------------------------------------------------------------------------
  const processSteps = document.querySelectorAll('.process-step');
  const processDetailTitle = document.getElementById('process-detail-title');
  const processDetailDesc = document.getElementById('process-detail-desc');
  const processDetailDeliverables = document.getElementById('process-detail-deliverables');

  const processData = {
    1: {
      title: "Step 01 — Discovery & Requirements Architecture",
      desc: "We analyze business workflows, interview technical stakeholders, define core functional objectives, and establish verifiable success benchmarks prior to coding.",
      deliverables: ["Technical Scope Document", "System Architecture Blueprint", "Milestone Roadmap", "Security & Compliance Checklist"]
    },
    2: {
      title: "Step 02 — Technical Planning & Engineering Strategy",
      desc: "Our architects map database schemas, API interfaces, cloud infrastructure targets, dependency risks, and responsive frontend system requirements.",
      deliverables: ["Data Schema Architecture", "API Contract Specifications", "Cloud Environment Sizing", "DevOps Pipeline Architecture"]
    },
    3: {
      title: "Step 03 — UI/UX Prototyping & Design Systems",
      desc: "Designers construct high-fidelity interactive wireframes, accessible component libraries, cross-platform layouts, and micro-interaction prototypes.",
      deliverables: ["Interactive Component Library", "Responsive Screen Designs", "Design System Tokens", "Accessibility Compliance Review"]
    },
    4: {
      title: "Step 04 — Modern Software Engineering & Integration",
      desc: "Engineers build clean, maintainable modular codebases with integrated CI/CD pipelines, strict code reviews, modular APIs, and containerized deployments.",
      deliverables: ["Production Codebase", "REST/GraphQL Endpoints", "Database Migrations", "Automated Build Pipelines"]
    },
    5: {
      title: "Step 05 — Rigorous Multi-Tier Verification & Testing",
      desc: "Comprehensive testing protocols across automated unit tests, cross-browser responsiveness, penetration safety, and enterprise load simulations.",
      deliverables: ["Test Execution Report", "Lighthouse Performance Audit", "Security Assessment Report", "Cross-Browser Compatibility Matrix"]
    },
    6: {
      title: "Step 06 — Seamless Deployment & Ongoing Maintenance",
      desc: "Staged zero-downtime production deployment backed by automated monitoring, telemetry alarms, technical documentation, and long-term version updates.",
      deliverables: ["Live Production Release", "Operations Runbook", "Telemetry Monitoring Setup", "Ongoing Maintenance Agreement"]
    }
  };

  if (processSteps.length > 0) {
    processSteps.forEach(step => {
      step.addEventListener('click', () => {
        processSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');

        const stepNum = step.getAttribute('data-step') || '1';
        const data = processData[stepNum];

        if (data && processDetailTitle && processDetailDesc) {
          processDetailTitle.textContent = data.title;
          processDetailDesc.textContent = data.desc;
          if (processDetailDeliverables) {
            processDetailDeliverables.innerHTML = data.deliverables.map(item => `<li><span class="feature-check">✓</span> ${item}</li>`).join('');
          }
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 8. Interactive AI Capability & Automation Workflow Diagram
  // -------------------------------------------------------------------------
  const workflowNodes = document.querySelectorAll('.workflow-node');
  const workflowTitle = document.getElementById('workflow-stage-title');
  const workflowDesc = document.getElementById('workflow-stage-desc');
  const workflowSubtext = document.getElementById('workflow-stage-subtext');

  const workflowStages = {
    '1': {
      title: 'Stage 01: Event Trigger & Ingestion',
      desc: 'System detects a trigger event — such as a webhook event, incoming support ticket, uploaded PDF invoice, API stream, or real-time user enquiry.',
      subtext: 'Illustrative Stage: Real integrations depend on verified customer infrastructure and enterprise security policies.'
    },
    '2': {
      title: 'Stage 02: Structured Data Normalization',
      desc: 'Raw inputs are sanitized, tokenized, and mapped to structured schemas. Sensitive PII data is masked or tokenized according to governance standards.',
      subtext: 'Illustrative Stage: Data validation protocols ensure complete compliance before model ingestion.'
    },
    '3': {
      title: 'Stage 03: Machine Intelligence & Model Processing',
      desc: 'Selected enterprise LLM, NLP, or computer vision models evaluate the prompt or vector embedding, extracting entities, classifying intent, or synthesizing solutions.',
      subtext: 'Illustrative Stage: Multi-model orchestration supports local or private cloud deployments.'
    },
    '4': {
      title: 'Stage 04: Business Rules & Validation Logic',
      desc: 'Algorithmic guards verify model outputs against business thresholds, safety policies, margin calculators, and enterprise business logic.',
      subtext: 'Illustrative Stage: Guardrails prevent out-of-policy execution and enforce strict verification criteria.'
    },
    '5': {
      title: 'Stage 05: Automated Execution & Action',
      desc: 'Approved operations execute automatically: updating an ERP record, generating a customized report, routing an email draft, or synchronizing inventory.',
      subtext: 'Illustrative Stage: Automated tasks operate under deterministic rollback and logging mechanisms.'
    },
    '6': {
      title: 'Stage 06: Human-in-the-Loop Review & Audit',
      desc: 'High-stake exceptions, low-confidence scores, or sensitive transactions seamlessly escalate to qualified human team members for review and sign-off.',
      subtext: 'Illustrative Stage: Guarantees human oversight and accountability for mission-critical operations.'
    }
  };

  if (workflowNodes.length > 0) {
    workflowNodes.forEach(node => {
      node.addEventListener('click', () => {
        workflowNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        const step = node.getAttribute('data-stage') || '1';
        const data = workflowStages[step];

        if (data && workflowTitle && workflowDesc) {
          workflowTitle.textContent = data.title;
          workflowDesc.textContent = data.desc;
          if (workflowSubtext) workflowSubtext.textContent = data.subtext;
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 9. Interactive Demo Dashboard
  // -------------------------------------------------------------------------
  const dashTabBtns = document.querySelectorAll('.dash-tab-btn');
  const dashStat1Val = document.getElementById('dash-stat-1-val');
  const dashStat2Val = document.getElementById('dash-stat-2-val');
  const dashStat3Val = document.getElementById('dash-stat-3-val');
  const dashStat4Val = document.getElementById('dash-stat-4-val');
  const dashChartPath = document.getElementById('dash-chart-path');
  const dashChartTitle = document.getElementById('dash-chart-title');

  const dashViews = {
    'sales': {
      title: 'Sales & Revenue Velocity (Illustrative Sample)',
      stat1: '$284,500',
      stat2: '1,420',
      stat3: '3.82%',
      stat4: '$200.35',
      path: 'M 10 180 Q 90 140 180 150 T 360 80 T 540 110 T 720 30'
    },
    'finance': {
      title: 'Financial Operating Margin (Illustrative Sample)',
      stat1: '$1,842,000',
      stat2: '41.2%',
      stat3: '$612,400',
      stat4: '99.98%',
      path: 'M 10 160 Q 90 170 180 120 T 360 100 T 540 60 T 720 45'
    },
    'operations': {
      title: 'Infrastructure & System Uptime (Illustrative Sample)',
      stat1: '99.99%',
      stat2: '24ms',
      stat3: '14,890 /s',
      stat4: '0 Incidents',
      path: 'M 10 70 Q 90 60 180 65 T 360 62 T 540 68 T 720 60'
    },
    'marketing': {
      title: 'Campaign Engagement & Traffic (Illustrative Sample)',
      stat1: '94,200',
      stat2: '18.4%',
      stat3: '4,812',
      stat4: '$1.42',
      path: 'M 10 190 Q 90 160 180 130 T 360 90 T 540 85 T 720 20'
    },
    'executive': {
      title: 'Executive Portfolio Summary (Illustrative Sample)',
      stat1: '12 Initiatives',
      stat2: '94% On-Track',
      stat3: '$4.2M Allocated',
      stat4: 'A+ Compliance',
      path: 'M 10 140 Q 90 120 180 110 T 360 70 T 540 50 T 720 25'
    }
  };

  if (dashTabBtns.length > 0) {
    dashTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dashTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const viewKey = btn.getAttribute('data-view') || 'sales';
        const view = dashViews[viewKey];

        if (view) {
          if (dashChartTitle) dashChartTitle.textContent = view.title;
          if (dashStat1Val) dashStat1Val.textContent = view.stat1;
          if (dashStat2Val) dashStat2Val.textContent = view.stat2;
          if (dashStat3Val) dashStat3Val.textContent = view.stat3;
          if (dashStat4Val) dashStat4Val.textContent = view.stat4;
          if (dashChartPath) {
            dashChartPath.setAttribute('d', view.path);
          }
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 10. Modal Dialog Manager
  // -------------------------------------------------------------------------
  const modalOverlay = document.getElementById('demo-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');

  const showModal = (title, message) => {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalMessage) modalMessage.textContent = message;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // -------------------------------------------------------------------------
  // 11. Form Validation & Submission Handlers (Frontend Demo Only)
  // -------------------------------------------------------------------------

  // Character counter for textarea
  const projectDescInput = document.getElementById('project-description');
  const charCounter = document.getElementById('char-count');
  if (projectDescInput && charCounter) {
    projectDescInput.addEventListener('input', () => {
      const len = projectDescInput.value.length;
      charCounter.textContent = `${len} / 1000 characters`;
    });
  }

  // Request a Quote Form
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Required field validation
      const name = quoteForm.querySelector('#quote-name');
      const email = quoteForm.querySelector('#quote-email');
      const service = quoteForm.querySelector('#quote-service');

      if (!name || !name.value.trim()) {
        alert('Please enter your full name.');
        name && name.focus();
        return;
      }

      if (!email || !email.value.trim() || !email.value.includes('@')) {
        alert('Please enter a valid business email address.');
        email && email.focus();
        return;
      }

      if (!service || !service.value) {
        alert('Please select a required IT service.');
        service && service.focus();
        return;
      }

      // Mandatory Prompt Response:
      // "Your demo project enquiry has been validated. No information has been transmitted or stored."
      showModal(
        'Project Enquiry Validated',
        'Your demo project enquiry has been validated. No information has been transmitted or stored. This is a frontend demo interface for an IT Company.'
      );
      quoteForm.reset();
      if (charCounter) charCounter.textContent = '0 / 1000 characters';
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#contact-name');
      const email = contactForm.querySelector('#contact-email');

      if (!name || !name.value.trim()) {
        alert('Please enter your full name.');
        name && name.focus();
        return;
      }

      if (!email || !email.value.trim() || !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        email && email.focus();
        return;
      }

      showModal(
        'Demo Message Validated',
        'Thank you for testing the contact form. This is a demonstration interface: your input has been validated successfully on the client side, and no message has been transmitted or stored.'
      );
      contactForm.reset();
    });
  }

  // Careers Application Form
  const careerForm = document.getElementById('career-form');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = careerForm.querySelector('#applicant-name');
      const email = careerForm.querySelector('#applicant-email');
      const position = careerForm.querySelector('#applicant-position');

      if (!name || !name.value.trim()) {
        alert('Please enter your full name.');
        name && name.focus();
        return;
      }

      if (!email || !email.value.trim() || !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        email && email.focus();
        return;
      }

      if (!position || !position.value) {
        alert('Please choose a position.');
        position && position.focus();
        return;
      }

      showModal(
        'Demo Application Validated',
        'Your demo job application has been validated. As this is an illustrative demonstration website, no application has been submitted, and no resume or personal details have been stored.'
      );
      careerForm.reset();
    });
  }

  // Generic Button Click Handler for any other action buttons
  document.querySelectorAll('button:not([type="submit"]):not(.mobile-toggle):not(.dash-tab-btn):not(.filter-btn):not(.faq-header):not(.modal-close)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.classList.contains('btn-placeholder-action')) {
        e.preventDefault();
        showModal('Interactive Demo Element', 'This interactive element is active in the demonstration interface. All business information and metrics represent customizable placeholders.');
      }
    });
  });

});
