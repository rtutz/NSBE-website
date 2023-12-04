/* eslint-disable react/prop-types */
import { useSpring, animated, useTransition } from 'react-spring';
import { useState } from 'react';

// function FaqCard({question, answer}) {
//     const [open, setOpen] = useState(false);

//     const contentProps = useSpring({
//         maxHeight: open ? '1000px' : '0px', // set max height instead of height
//     });

//     const hrProps = useSpring({
//         width: open ? '100%' : '0%',
//         backgroundColor: open ? '#ccc' : 'transparent',
//     });

//     return (
//         <div className="py-2 px-4 flex flex-col rounded-lg" 
//           onClick={() => setOpen(open => !open)}>
//             <div id="header" className="flex text-xl items-center">
//                 <span className="text-4xl mr-8 text-palette-200">+</span> {question}
//             </div>
//             <animated.div className="hr" style={hrProps}></animated.div>
//             <animated.div id="content" style={contentProps}>
//                 {answer}
//             </animated.div>
          
//         </div>
//     );
// }

function FaqCard({question, answer}) {
    const [open, setOpen] = useState(false);
    const animateHr = useSpring({ 
        to: { width: open ? '100%' : '0%'}, 
        from: { width: '0%' }
    });

    const iconProps = useSpring({ transform: open ? "rotate(180deg)" : "rotate(0deg)" });

    const contentTransition = useTransition(open, {
        from: { opacity: 0, height: 0 },
        enter: { opacity: 1, height: 'auto' },
        leave: { opacity: 0, height: 0 },
    });

    return ( 
        <div onClick={() => setOpen(!open)} className="flex flex-col mb-0">
            <div id="header" className="flex text-xl py-1 px-4 justify-between">
                {question}
                <animated.div style={iconProps}>
      { open 
         ? <div className='text-palette-200 text-3xl'> - </div>
         : <div className='text-palette-200 text-3xl'> + </div>
      }
    </animated.div>
            </div>
            {open && <animated.div style={animateHr} className="hr"></animated.div>}
               
            {contentTransition((style, item) =>
                item ? <animated.div style={style} id="content">{answer}</animated.div> : null
            )}
        </div>
    );
}
export default FaqCard;