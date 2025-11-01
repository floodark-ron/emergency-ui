export default {
  title: 'Components/Panels',
  parameters: {
    docs: {
      description: {
        component: 'Professional panel system for emergency and crisis management interfaces. Optimized for data display, real-time updates, and mobile responsiveness.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'critical', 'warning', 'success']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full']
    },
    collapsible: {
      control: { type: 'boolean' }
    }
  }
};

const Template = ({ 
  variant = 'default', 
  size = 'md', 
  collapsible = false,
  title = 'Emergency Panel',
  badge = 'LIVE',
  content = 'Panel content goes here...'
}) => {
  const panelClasses = [
    'emergency-panel',
    variant !== 'default' ? `emergency-panel-${variant}` : '',
    `emergency-panel-${size}`,
    collapsible ? 'emergency-panel-collapsible' : ''
  ].filter(Boolean).join(' ');

  return `
    <div class="${panelClasses}">
      <div class="emergency-panel-header">
        <h2 class="emergency-panel-title">
          ${title}
          <span class="emergency-panel-badge">${badge}</span>
        </h2>
        <div class="emergency-panel-controls">
          ${collapsible ? '<span class="emergency-panel-collapse-icon">▼</span>' : ''}
          <button class="emergency-btn emergency-btn-ghost emergency-btn-xs">⚙️</button>
        </div>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-base emergency-text-primary">${content}</p>
      </div>
      <div class="emergency-panel-footer">
        <span class="emergency-text-sm emergency-text-muted">Last updated: 2 minutes ago</span>
        <button class="emergency-btn emergency-btn-primary emergency-btn-sm">Refresh</button>
      </div>
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
  title: 'System Status',
  badge: 'ACTIVE',
  content: 'All emergency systems are operational and monitoring for threats.'
};

export const Critical = Template.bind({});
Critical.args = {
  variant: 'critical',
  title: 'CRITICAL ALERT',
  badge: 'URGENT',
  content: 'Immediate evacuation required. Multiple fire sources detected in your area.'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Weather Warning',
  badge: 'WATCH',
  content: 'Severe thunderstorm warning in effect. Monitor conditions closely.'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'All Clear',
  badge: 'SAFE',
  content: 'Emergency situation has been resolved. Normal operations resumed.'
};

export const Sizes = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-6">
    <h3 class="emergency-text-lg emergency-font-semibold emergency-text-primary">Panel Sizes</h3>
    
    <div class="emergency-panel emergency-panel-sm">
      <div class="emergency-panel-header">
        <h3 class="emergency-panel-title">Small Panel</h3>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-sm">Compact information display</p>
      </div>
    </div>
    
    <div class="emergency-panel emergency-panel-md">
      <div class="emergency-panel-header">
        <h3 class="emergency-panel-title">Medium Panel</h3>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-base">Standard information display with more content space</p>
      </div>
    </div>
    
    <div class="emergency-panel emergency-panel-lg">
      <div class="emergency-panel-header">
        <h3 class="emergency-panel-title">Large Panel</h3>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-base">Extended information display for detailed emergency data and status updates</p>
      </div>
    </div>
  </div>
`;

export const CollapsiblePanel = () => `
  <div class="emergency-panel emergency-panel-collapsible emergency-panel-md">
    <div class="emergency-panel-header">
      <h3 class="emergency-panel-title">
        Collapsible Panel
        <span class="emergency-panel-badge">EXPANDABLE</span>
      </h3>
      <div class="emergency-panel-controls">
        <span class="emergency-panel-collapse-icon">▼</span>
      </div>
    </div>
    <div class="emergency-panel-content">
      <p class="emergency-text-base emergency-text-primary">
        This panel can be collapsed to save space while maintaining quick access to critical information.
      </p>
      <div class="emergency-flex emergency-gap-3 emergency-mt-4">
        <button class="emergency-btn emergency-btn-primary emergency-btn-sm">Action 1</button>
        <button class="emergency-btn emergency-btn-secondary emergency-btn-sm">Action 2</button>
      </div>
    </div>
    <div class="emergency-panel-footer">
      <span class="emergency-text-sm emergency-text-muted">Click header to collapse</span>
    </div>
  </div>
`;

export const ModalPanel = () => `
  <div class="emergency-modal-backdrop">
    <div class="emergency-panel emergency-panel-modal emergency-panel-md">
      <div class="emergency-panel-header">
        <h3 class="emergency-panel-title">
          Emergency Alert
          <span class="emergency-panel-badge">MODAL</span>
        </h3>
        <div class="emergency-panel-controls">
          <button class="emergency-btn emergency-btn-ghost emergency-btn-xs">✕</button>
        </div>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-base emergency-text-primary">
          This is a modal panel that appears over other content to display critical emergency information.
        </p>
      </div>
      <div class="emergency-panel-footer">
        <button class="emergency-btn emergency-btn-secondary emergency-btn-sm">Cancel</button>
        <button class="emergency-btn emergency-btn-critical emergency-btn-sm">Acknowledge</button>
      </div>
    </div>
  </div>
`;

export const PanelGrid = () => `
  <div class="emergency-panel-grid emergency-panel-grid-2">
    <div class="emergency-panel emergency-panel-sm">
      <div class="emergency-panel-header">
        <h4 class="emergency-panel-title">Fire Status</h4>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-sm">3 active incidents</p>
      </div>
    </div>
    
    <div class="emergency-panel emergency-panel-sm">
      <div class="emergency-panel-header">
        <h4 class="emergency-panel-title">Flood Status</h4>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-sm">1 warning area</p>
      </div>
    </div>
    
    <div class="emergency-panel emergency-panel-sm">
      <div class="emergency-panel-header">
        <h4 class="emergency-panel-title">Weather</h4>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-sm">Severe conditions</p>
      </div>
    </div>
    
    <div class="emergency-panel emergency-panel-sm">
      <div class="emergency-panel-header">
        <h4 class="emergency-panel-title">Resources</h4>
      </div>
      <div class="emergency-panel-content">
        <p class="emergency-text-sm">12 units available</p>
      </div>
    </div>
  </div>
`;

export const EmergencyDashboard = () => `
  <div class="emergency-flex emergency-flex-col emergency-gap-6">
    <h3 class="emergency-text-xl emergency-font-bold emergency-text-primary">Emergency Command Center</h3>
    
    <!-- Critical Alerts -->
    <div class="emergency-panel emergency-panel-critical emergency-panel-lg">
      <div class="emergency-panel-header">
        <h3 class="emergency-panel-title">
          🚨 CRITICAL ALERTS
          <span class="emergency-panel-badge">3 ACTIVE</span>
        </h3>
        <div class="emergency-panel-controls">
          <button class="emergency-btn emergency-btn-critical emergency-btn-xs">View All</button>
        </div>
      </div>
      <div class="emergency-panel-content">
        <div class="emergency-flex emergency-flex-col emergency-gap-3">
          <div class="emergency-bg-critical-subtle emergency-p-3 emergency-rounded-lg">
            <p class="emergency-text-urgent">Wildfire - Sector 7: Immediate evacuation required</p>
            <p class="emergency-text-sm emergency-text-muted">Reported 5 minutes ago</p>
          </div>
          <div class="emergency-bg-critical-subtle emergency-p-3 emergency-rounded-lg">
            <p class="emergency-text-urgent">Flash Flood Warning - Downtown: Seek higher ground</p>
            <p class="emergency-text-sm emergency-text-muted">Reported 12 minutes ago</p>
          </div>
        </div>
      </div>
      <div class="emergency-panel-footer">
        <span class="emergency-text-sm emergency-text-muted">Auto-refresh: ON</span>
        <button class="emergency-btn emergency-btn-critical emergency-btn-sm">Broadcast Alert</button>
      </div>
    </div>
    
    <!-- Status Grid -->
    <div class="emergency-panel-grid emergency-panel-grid-3">
      <div class="emergency-panel emergency-panel-success">
        <div class="emergency-panel-header">
          <h4 class="emergency-panel-title">System Health</h4>
        </div>
        <div class="emergency-panel-content">
          <p class="emergency-text-safe emergency-font-semibold">98% Operational</p>
        </div>
      </div>
      
      <div class="emergency-panel emergency-panel-warning">
        <div class="emergency-panel-header">
          <h4 class="emergency-panel-title">Weather Alerts</h4>
        </div>
        <div class="emergency-panel-content">
          <p class="emergency-text-attention emergency-font-semibold">2 Active Warnings</p>
        </div>
      </div>
      
      <div class="emergency-panel">
        <div class="emergency-panel-header">
          <h4 class="emergency-panel-title">Response Teams</h4>
        </div>
        <div class="emergency-panel-content">
          <p class="emergency-text-primary emergency-font-semibold">15 Units Deployed</p>
        </div>
      </div>
    </div>
  </div>
`;
