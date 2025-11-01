export default {
  title: 'Components/Buttons',
  parameters: {
    docs: {
      description: {
        component: 'Professional button system for emergency and crisis management interfaces. Optimized for accessibility, touch targets, and high-stress situations.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'critical', 'warning', 'success', 'ghost', 'outline']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    disabled: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    }
  }
};

const Template = ({ variant = 'primary', size = 'md', disabled = false, loading = false, children = 'Button' }) => {
  const classes = [
    'emergency-btn',
    `emergency-btn-${variant}`,
    `emergency-btn-${size}`,
    loading ? 'emergency-btn-loading' : '',
    'emergency-transition-all'
  ].filter(Boolean).join(' ');

  return `
    <button class="${classes}" ${disabled ? 'disabled' : ''}>
      ${children}
    </button>
  `;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Action'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Action'
};

export const Critical = Template.bind({});
Critical.args = {
  variant: 'critical',
  children: 'Emergency Alert'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning Action'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Confirm Safe'
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button'
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Outline Button'
};

export const Sizes = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-4">
    <h3 class="emergency-text-lg emergency-font-semibold emergency-text-primary">Button Sizes</h3>
    <div class="emergency-flex emergency-items-center emergency-gap-4 emergency-flex-wrap">
      <button class="emergency-btn emergency-btn-primary emergency-btn-xs">Extra Small</button>
      <button class="emergency-btn emergency-btn-primary emergency-btn-sm">Small</button>
      <button class="emergency-btn emergency-btn-primary emergency-btn-md">Medium</button>
      <button class="emergency-btn emergency-btn-primary emergency-btn-lg">Large</button>
      <button class="emergency-btn emergency-btn-primary emergency-btn-xl">Extra Large</button>
    </div>
  </div>
`;

export const WithIcons = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-4">
    <h3 class="emergency-text-lg emergency-font-semibold emergency-text-primary">Buttons with Icons</h3>
    <div class="emergency-flex emergency-items-center emergency-gap-4 emergency-flex-wrap">
      <button class="emergency-btn emergency-btn-primary emergency-btn-icon-left">
        <span class="emergency-btn-icon">🚨</span>
        Alert
      </button>
      <button class="emergency-btn emergency-btn-secondary emergency-btn-icon-right">
        Search
        <span class="emergency-btn-icon">🔍</span>
      </button>
      <button class="emergency-btn emergency-btn-critical emergency-btn-icon-only" title="Emergency">
        <span class="emergency-btn-icon">⚠️</span>
      </button>
    </div>
  </div>
`;

export const States = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-4">
    <h3 class="emergency-text-lg emergency-font-semibold emergency-text-primary">Button States</h3>
    <div class="emergency-flex emergency-items-center emergency-gap-4 emergency-flex-wrap">
      <button class="emergency-btn emergency-btn-primary">Normal</button>
      <button class="emergency-btn emergency-btn-primary" disabled>Disabled</button>
      <button class="emergency-btn emergency-btn-primary emergency-btn-loading">Loading</button>
    </div>
  </div>
`;

export const ButtonGroup = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-4">
    <h3 class="emergency-text-lg emergency-font-semibold emergency-text-primary">Button Groups</h3>
    <div class="emergency-btn-group">
      <button class="emergency-btn emergency-btn-secondary">Left</button>
      <button class="emergency-btn emergency-btn-secondary">Center</button>
      <button class="emergency-btn emergency-btn-secondary">Right</button>
    </div>
  </div>
`;

export const EmergencyScenarios = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-6">
    <h3 class="emergency-text-lg emergency-font-semibold emergency-text-primary">Emergency Scenarios</h3>
    
    <div class="emergency-flex emergency-flex-col emergency-gap-3">
      <h4 class="emergency-text-base emergency-font-medium emergency-text-secondary">Fire Emergency</h4>
      <div class="emergency-flex emergency-gap-3 emergency-flex-wrap">
        <button class="emergency-btn emergency-btn-critical">🔥 Evacuate Now</button>
        <button class="emergency-btn emergency-btn-warning">⚠️ Shelter in Place</button>
        <button class="emergency-btn emergency-btn-secondary">📞 Call 911</button>
      </div>
    </div>
    
    <div class="emergency-flex emergency-flex-col emergency-gap-3">
      <h4 class="emergency-text-base emergency-font-medium emergency-text-secondary">Flood Warning</h4>
      <div class="emergency-flex emergency-gap-3 emergency-flex-wrap">
        <button class="emergency-btn emergency-btn-critical">🌊 Immediate Evacuation</button>
        <button class="emergency-btn emergency-btn-warning">🏠 Move to Higher Ground</button>
        <button class="emergency-btn emergency-btn-success">✅ Area Secure</button>
      </div>
    </div>
    
    <div class="emergency-flex emergency-flex-col emergency-gap-3">
      <h4 class="emergency-text-base emergency-font-medium emergency-text-secondary">System Status</h4>
      <div class="emergency-flex emergency-gap-3 emergency-flex-wrap">
        <button class="emergency-btn emergency-btn-success">🟢 All Systems Operational</button>
        <button class="emergency-btn emergency-btn-warning">🟡 Monitoring Active</button>
        <button class="emergency-btn emergency-btn-critical">🔴 System Alert</button>
      </div>
    </div>
  </div>
`;

export const AccessibilityDemo = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-4">
    <h3 class="emergency-text-lg emergency-font-semibold emergency-text-primary">Accessibility Features</h3>
    <div class="emergency-flex emergency-flex-col emergency-gap-3">
      <p class="emergency-text-sm emergency-text-muted">
        All buttons meet WCAG AA standards with proper focus indicators, 
        minimum touch targets (44px), and screen reader support.
      </p>
      <div class="emergency-flex emergency-gap-3 emergency-flex-wrap">
        <button class="emergency-btn emergency-btn-primary" aria-label="Emergency alert button">
          🚨 Alert (with aria-label)
        </button>
        <button class="emergency-btn emergency-btn-secondary" title="This button has a tooltip">
          Hover for tooltip
        </button>
        <button class="emergency-btn emergency-btn-outline" aria-describedby="help-text">
          With description
        </button>
      </div>
      <p id="help-text" class="emergency-text-sm emergency-text-muted">
        This button is described by this help text for screen readers.
      </p>
    </div>
  </div>
`;
