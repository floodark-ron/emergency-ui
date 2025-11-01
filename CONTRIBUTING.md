# Contributing to Emergency UI

Thank you for your interest in contributing to Emergency UI! This design system is built for the global emergency management community, and we welcome contributions from developers, designers, and emergency management professionals.

## 🎯 Our Mission

Emergency UI aims to provide the highest quality, most accessible design system for emergency and crisis management interfaces. Every contribution should support this mission by:

- **Improving accessibility** for emergency responders and the public
- **Enhancing usability** under high-stress situations
- **Supporting real-world emergency management** workflows
- **Maintaining professional quality** for critical systems

## 🤝 Ways to Contribute

### 🐛 Bug Reports

Found a bug? Help us fix it:

1. **Search existing issues** to avoid duplicates
2. **Use the bug report template** with detailed information
3. **Include reproduction steps** and expected vs actual behavior
4. **Test on multiple devices/browsers** if possible
5. **Consider accessibility impact** - does this affect users with disabilities?

### ✨ Feature Requests

Have an idea for improvement?

1. **Check the roadmap** to see if it's already planned
2. **Describe the emergency management use case** - how does this help responders?
3. **Consider accessibility implications** from the start
4. **Provide mockups or examples** if possible
5. **Think about mobile/field use** - will this work for emergency responders in the field?

### 🎨 Design Contributions

Designers can contribute:

- **Accessibility improvements** (color contrast, focus indicators, etc.)
- **Mobile-first responsive patterns** for field emergency response
- **Emergency-specific iconography** and visual patterns
- **High-stress usability enhancements** (larger touch targets, clearer hierarchy)
- **Documentation and examples** of design patterns

### 💻 Code Contributions

Developers can contribute:

- **Component improvements** and new emergency-focused components
- **Accessibility enhancements** (ARIA labels, keyboard navigation, etc.)
- **Performance optimizations** for real-time emergency data
- **Cross-browser compatibility** fixes
- **Documentation and examples**

## 🚀 Getting Started

### Development Setup

1. **Fork and clone** the repository:
   ```bash
   git clone https://github.com/your-username/emergency-ui.git
   cd emergency-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start Storybook** for development:
   ```bash
   npm run storybook
   ```

4. **Run tests**:
   ```bash
   npm test
   npm run test:a11y
   ```

### Project Structure

```
emergency-ui/
├── src/
│   ├── tokens/          # Design tokens (colors, typography, spacing)
│   ├── components/      # Component CSS files
│   └── emergency-ui.css # Main entry point
├── stories/             # Storybook stories and documentation
├── .storybook/          # Storybook configuration
└── dist/                # Built files (generated)
```

## 📋 Contribution Guidelines

### Code Standards

1. **Follow existing patterns** - Maintain consistency with current codebase
2. **Use semantic CSS classes** - `.emergency-btn-critical` not `.red-button`
3. **Mobile-first responsive design** - Start with mobile, enhance for desktop
4. **Accessibility first** - Every component must be keyboard navigable and screen reader friendly
5. **Emergency context** - Consider high-stress usage scenarios

### CSS Guidelines

```css
/* ✅ Good - Semantic, emergency-focused naming */
.emergency-btn-critical {
  background: var(--emergency-critical);
  color: white;
  min-height: var(--emergency-touch-target); /* 44px minimum */
}

/* ❌ Bad - Generic, non-semantic naming */
.red-btn {
  background: red;
  color: white;
  height: 30px; /* Too small for touch */
}
```

### Accessibility Requirements

All contributions must meet **WCAG 2.1 AA standards**:

- **Color contrast** minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard navigation** - All interactive elements must be keyboard accessible
- **Focus indicators** - Visible focus states for all interactive elements
- **Screen reader support** - Proper semantic HTML and ARIA labels
- **Touch targets** - Minimum 44px for mobile accessibility
- **Reduced motion** - Respect `prefers-reduced-motion` user preference

### Testing Requirements

Before submitting:

1. **Visual testing** - Test in Storybook across different viewports
2. **Accessibility testing** - Run `npm run test:a11y` and manual keyboard testing
3. **Cross-browser testing** - Test in Chrome, Firefox, Safari, Edge
4. **Mobile testing** - Test on actual mobile devices if possible
5. **Emergency scenarios** - Consider how this works under stress/urgency

## 📝 Pull Request Process

### Before Submitting

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/emergency-alert-improvements
   ```

2. **Make your changes** following the guidelines above

3. **Test thoroughly**:
   ```bash
   npm test
   npm run test:a11y
   npm run build
   ```

4. **Update documentation** if needed (README, Storybook stories)

5. **Commit with clear messages**:
   ```bash
   git commit -m "feat: improve critical alert button accessibility
   
   - Increase minimum touch target to 44px
   - Add proper ARIA labels for screen readers
   - Enhance focus indicators for keyboard navigation
   - Test with emergency management professionals"
   ```

### Pull Request Template

When submitting, include:

- **Description** of changes and emergency management use case
- **Testing performed** (browsers, devices, accessibility tools)
- **Screenshots/videos** showing the changes
- **Breaking changes** if any
- **Emergency management context** - how does this help responders?

### Review Process

1. **Automated checks** must pass (tests, accessibility, build)
2. **Design review** for visual and UX consistency
3. **Accessibility review** by accessibility experts
4. **Emergency management review** by domain experts when possible
5. **Code review** by maintainers

## 🏷️ Issue Labels

We use these labels to organize contributions:

- `bug` - Something isn't working correctly
- `enhancement` - New feature or improvement
- `accessibility` - Accessibility-related issue or improvement
- `emergency-critical` - Critical for emergency management workflows
- `mobile` - Mobile/responsive design related
- `documentation` - Documentation improvements
- `good-first-issue` - Good for newcomers
- `help-wanted` - Extra attention needed

## 🌟 Recognition

Contributors are recognized in:

- **README.md** acknowledgments section
- **Release notes** for significant contributions
- **Storybook documentation** for component contributions
- **Emergency management community** presentations and conferences

## 📞 Getting Help

Need help contributing?

- **GitHub Discussions** - Ask questions and get help from the community
- **Discord** - Join our emergency management developer community
- **Office Hours** - Monthly video calls with maintainers
- **Documentation** - Comprehensive guides and examples

## 🚨 Emergency Management Context

Remember that Emergency UI is used in **life-critical situations**:

- **Accuracy is paramount** - Bugs can have serious consequences
- **Accessibility is essential** - Emergency responders have diverse abilities
- **Performance matters** - Systems must work under high load during disasters
- **Mobile-first** - Many emergency responders work from mobile devices
- **High-stress usability** - Interfaces must work when users are under extreme stress

Every contribution should consider these real-world emergency management needs.

## 📄 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## 📜 License

By contributing to Emergency UI, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make emergency management interfaces more accessible and effective! 🚨❤️**
