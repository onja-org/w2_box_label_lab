const fs = require('fs');
const cheerio = require('cheerio');

// Read HTML and CSS files
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const $ = cheerio.load(html); // Load HTML with Cheerio

// Helper function to check for the presence of a CSS property with any non-empty value
function hasCssProperty(selector, property) {
  const pattern = new RegExp(`${selector}\\s*{[^}]*${property}\\s*:\\s*[^;]+;?[^}]*}`, 'i');
  return pattern.test(css);
}

// Helper function to check if a property has a non-zero value
function hasNonZeroCssValue(selector, property) {
  // Checks for the property followed by any value that isn't '0' or '0px' etc.
  const pattern = new RegExp(`${selector}\\s*{[^}]*${property}\\s*:\\s*(?!0(?![^\\d]))[^;]+;?[^}]*}`, 'i');
  return pattern.test(css);
}

console.log('--- Running Basic User Profile Card Box Model Tests ---');

// ===== HTML STRUCTURE TESTS ===== //

// Identify the main card container: look for a div that directly contains the profile content
const mainCard = $('div:has(img, h2, p)').first();

console.assert(
  mainCard.length > 0,
  '❌ HTML: Could not find a main <div> element that contains the profile picture, name, and bio.'
);

// Check for required content within the identified main card
console.assert(
  mainCard.find('img').length > 0,
  '❌ HTML: Main card missing an <img> for profile picture.'
);
console.assert(
  mainCard.find('h2').length > 0,
  '❌ HTML: Main card missing an <h2> for user name.'
);
console.assert(
  mainCard.find('p').length > 0,
  '❌ HTML: Main card missing a <p> for short bio.'
);

// ===== CSS STYLING TESTS ===== //

// Universal Box-sizing check
console.assert(
  /\*\s*{[^}]*box-sizing\s*:\s*border-box[^;]*;?[^}]*}/i.test(css),
  '❌ CSS: Missing `box-sizing: border-box;` on the universal selector (`*`).'
);

// Body centering (simple check for display: flex on body)
console.assert(
  /body\s*{[^}]*display\s*:\s*flex[^;]*;?[^}]*}/i.test(css),
  '❌ CSS: Body should use `display: flex` (or similar) to center the card on the page.'
);

// Check if the main card element has the Box Model properties
// We'll target a generic 'div' or specifically the element identified as 'mainCard'

// Note: Without class names, these CSS checks are less precise as they apply to *any* div.
// For a truly basic check, we'll assume the styling is applied to the main card div.
const mainCardSelector = mainCard.attr('class') ? '.' + mainCard.attr('class').split(' ')[0] : 'div'; // Use class if available, else generic div

console.assert(
  hasNonZeroCssValue(mainCardSelector, 'margin'),
  `❌ CSS: The main card (${mainCardSelector}) needs a visible 'margin' (should not be 0).`
);
console.assert(
  hasCssProperty(mainCardSelector, 'border'),
  `❌ CSS: The main card (${mainCardSelector}) needs a 'border'.`
);
console.assert(
  hasNonZeroCssValue(mainCardSelector, 'padding'),
  `❌ CSS: The main card (${mainCardSelector}) needs visible 'padding' (should not be 0).`
);
console.assert(
  hasCssProperty(mainCardSelector, 'background-color'),
  `❌ CSS: The main card (${mainCardSelector}) needs a 'background-color'.`
);
console.assert(
  hasCssProperty(mainCardSelector, 'max-width'),
  `❌ CSS: The main card (${mainCardSelector}) needs a 'max-width'.`
);

// Basic check for content styling (presence of common properties)
console.assert(
  hasCssProperty(`${mainCardSelector} img`, 'width') || hasCssProperty(`${mainCardSelector} img`, 'max-width'),
  `❌ CSS: Image within the card (${mainCardSelector} img) needs 'width' or 'max-width' styling.`
);

console.log('\n✅ Basic checks completed. Remember to visually inspect your card for distinct colors on layers and precise centering using Dev Tools!');