import plugin from 'tailwindcss/plugin';

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