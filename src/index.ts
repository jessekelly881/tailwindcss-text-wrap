/**
 * @since 1.0.0
 */

import plugin from 'tailwindcss/plugin';

/**
 * Plugin to add text wrap utilities to tailwindcss
 * @since 1.0.0
 */
export default plugin(
    function({ matchUtilities, theme }) { 
        matchUtilities({
            "text": (value) => ({
                textWrap: value
            }),
        }, 
        { values: theme('textWrap') })
    }, 
    {
        theme: {
            textWrap: {
                "nowrap": "nowrap",
                "wrap": 'wrap',
                "balance": 'balance',
                "stable": "stable",
                "pretty": "pretty"
            },
        }
    }
) 