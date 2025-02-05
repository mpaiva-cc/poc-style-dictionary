import StyleDictionary from 'style-dictionary';
import { formats, transformGroups } from 'style-dictionary/enums';

const { androidColors, androidDimens, androidFontDimens, iosMacros, scssVariables } = formats;
const { web } = transformGroups;

// Register DTCG JSON format
StyleDictionary.registerFormat({
  name: 'dtcg/json',
  format: function({ dictionary }) {
    const transformedTokens = dictionary.allTokens.reduce((acc, token) => {
      // Convert path array to nested object structure
      let current = acc;
      const path = token.path;
      
      // Navigate through the path except the last item
      for (let i = 0; i < path.length - 1; i++) {
        const segment = path[i];
        current[segment] = current[segment] || {};
        current = current[segment];
      }
      
      // Set the value at the final path segment
      const lastSegment = path[path.length - 1];
      current[lastSegment] = {
        $value: token.value,
        $type: token.type || 'unknown'
      };
      
      return acc;
    }, {});

    return JSON.stringify(transformedTokens, null, 2);
  }
});

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [
      `tokens/brands/${brand}/*.json`,
      'tokens/globals/**/*.json',
      `tokens/platforms/${platform}/*.json`,
    ],
    platforms: {
      web: {
        transformGroup: web,
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: 'tokens.scss',
            format: scssVariables,
          },
          {
            destination: 'tokens.json',
            format: 'dtcg/json'
          }
        ],
      },
      android: {
        transformGroup: 'android',
        buildPath: `build/android/${brand}/`,
        files: [
          {
            destination: 'tokens.colors.xml',
            format: androidColors,
          },
          {
            destination: 'tokens.dimens.xml',
            format: androidDimens,
          },
          {
            destination: 'tokens.font_dimens.xml',
            format: androidFontDimens,
          },
        ],
      },
      ios: {
        transformGroup: 'ios',
        buildPath: `build/ios/${brand}/`,
        files: [
          {
            destination: 'tokens.h',
            format: iosMacros,
          },
        ],
      }
    },
    log: {
      verbosity: 'verbose'
    }
  };
}

console.log('Build started...');

/* 
PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

*/ 

['_default','cco_default','bbi_default', 'bbi-bonefish', 'bbi-carrabas', 'bbi-flemings', 'bbi-outback'].map(function (brand) {
  ['web', 'ios', 'android'].map(function (platform) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
