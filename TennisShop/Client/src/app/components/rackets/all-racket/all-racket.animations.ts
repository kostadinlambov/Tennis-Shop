import { 
    trigger,
    state,
    animate,
    transition,
    style,
    keyframes,
    group
   } from '@angular/animations';

   const allRacketAnimations = [
      trigger('list1', [
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100px)'
          }),
          animate(300)
        ]),
        transition('* => void', [
          animate(1500, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ]),
      trigger('list2', [
        transition('void => *', [
          animate(2000, keyframes([
            style({
              transform: 'translateX(-200px)',
              opacity: 0
            }),
            style({
              transform: 'translateX(-50px)',
              opacity: 0.5
            }),
            style({
              transform: 'translateX(-20px)',
              opacity: 0.7
            }),
            style({
              transform: 'translateX(0)',
              opacity: 1
            })
          ]))
        ]),
        // transition('* => void', [
        //   group([
        //     animate(1000, style({
        //       color: 'red'
        //     })),
        //     animate(800, style({
        //       transform: 'translateX(100px)',
        //       opacity: 0
        //      }))
        //   ])
        // ])
      ])
    ];
    export { allRacketAnimations };
