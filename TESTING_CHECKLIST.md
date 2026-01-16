# Testing Checklist

## Pages to Verify

### ✅ Homepage (/)
- [ ] Hero section with particle field renders
- [ ] Trust block with animated stats
- [ ] Tech stack badges
- [ ] Early access banner
- [ ] **ChatDemoSection** - Interactive chat demo (#demo)
  - [ ] Code tabs work (Basic, Streaming, Optimized)
  - [ ] Theme toggle works (dark/light)
  - [ ] Can send messages
  - [ ] Preset question buttons work
  - [ ] Copy code button works
- [ ] **CodeComparison** - Before/After comparison
  - [ ] Can switch between before/after tabs
  - [ ] Code displays correctly
- [ ] Features bento grid
- [ ] Comparison section
- [ ] Provider logos
- [ ] **SavingsCalculator** - Token savings calculator
  - [ ] Preset buttons work (Startup, Growth, Scale, Enterprise)
  - [ ] Slider works (40-90% savings)
  - [ ] Calculations update correctly
- [ ] Services section
- [ ] About section
- [ ] Process section
- [ ] Pricing section
- [ ] FAQ section (accordion)
- [ ] Contact form
- [ ] Final CTA
- [ ] Footer
- [ ] Sticky mobile CTA
- [ ] Exit intent popup

### ✅ Pricing Page (/pricing)
- [ ] Page loads without errors
- [ ] All 3 pricing tiers display
- [ ] FAQ section works
- [ ] Links work correctly

### ✅ Services Pages
- [ ] `/services` - Main services page
- [ ] `/services/ai-development`
- [ ] `/services/token-optimization`
- [ ] `/services/documentation`
- [ ] `/services/frontend-development`
- [ ] `/services/sdk-development`
- [ ] `/services/accessibility`

## Interactive Components to Test

### ChatDemoSection (Main Playground)
1. **Code Tabs**
   - Click "Basic" tab → shows basic code example
   - Click "Streaming" tab → shows streaming code example
   - Click "Optimized" tab → shows optimized code example

2. **Theme Toggle**
   - Click sun/moon icon → switches between dark/light theme
   - Chat UI updates colors accordingly

3. **Message Sending**
   - Type in input field
   - Click send or press Enter
   - Message appears in chat
   - AI response streams in

4. **Preset Questions**
   - Click "How do I implement streaming?"
   - Click "Show me token optimization"
   - Click "What providers are supported?"
   - Each should trigger appropriate response

5. **Copy Code**
   - Click "Copy" button
   - Should copy code to clipboard
   - Button should show "Copied!" confirmation

### SavingsCalculator
1. **Preset Selection**
   - Click "Startup" → updates calculations
   - Click "Growth" → updates calculations
   - Click "Scale" → updates calculations
   - Click "Enterprise" → updates calculations

2. **Savings Slider**
   - Drag slider from 40% to 90%
   - Calculations should update in real-time
   - Display should show new savings amount

### CodeComparison
1. **Tab Switching**
   - Click "Without Clarity Chat" card → highlights red
   - Click "With Clarity Chat" card → highlights green
   - Code content switches accordingly

## Particle Field Issues

### Current Status
- Component is imported and added to hero section
- WebGL support check is in place
- Canvas is configured with proper dimensions
- Particles are sized at 0.15 (increased from 0.08)
- Opacity set to 1.0 (full visibility)
- Connection lines opacity increased to 0.3

### Debugging Steps
1. Check browser console for:
   - "WebGL supported, particle field should render"
   - "Canvas created" with dimensions
   - Any WebGL errors

2. Inspect DOM:
   - Look for `<canvas>` element in hero section
   - Check if canvas has width/height > 0
   - Verify z-index layering

3. Check if particles are rendering but invisible:
   - Overlay might be too opaque
   - Particles might be behind other elements
   - Camera position might be wrong

## Browser Console Commands for Testing

```javascript
// Check if particle field is rendering
const canvas = document.querySelector('canvas');
console.log('Canvas found:', !!canvas);
if (canvas) {
  console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
  console.log('Canvas style:', window.getComputedStyle(canvas));
}

// Test ChatDemoSection
const chatDemo = document.querySelector('#demo');
console.log('ChatDemoSection found:', !!chatDemo);

// Test SavingsCalculator
const slider = document.querySelector('input[type="range"]');
console.log('Savings slider found:', !!slider);

// Test CodeComparison
const codeComparison = document.querySelector('section:has([class*="premium-card"])');
console.log('CodeComparison found:', !!codeComparison);
```

## Known Issues to Fix

1. **Particle Field Not Rendering**
   - ✅ Added WebGL support check
   - ✅ Added proper dimensions
   - ✅ Increased particle size and opacity
   - ✅ Reduced overlay opacity
   - ⚠️ Still needs verification in browser

2. **All Other Components**
   - ✅ Error boundaries added
   - ✅ Clipboard API fallback added
   - ✅ Memory leak fixes
   - ✅ XSS protection added
   - ✅ Safety checks for formatting functions
