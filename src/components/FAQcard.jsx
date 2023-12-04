/* eslint-disable react/prop-types */
import { useSpring, animated, useTransition } from 'react-spring';
import { useState } from 'react';

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
        <div onClick={() => setOpen(!open)} className="flex flex-col mb-10">
            <div id="header" className="flex text-xl py-1 px-4 justify-between">
                {question}
                <animated.div style={iconProps}>
      { open 
         ? <div className='text-palette-100 text-3xl'> - </div>
         : <div className='text-palette-100 text-3xl'> + </div>
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