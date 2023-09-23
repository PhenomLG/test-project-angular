import {
  trigger,
  animate,
  group,
  transition,
  animateChild,
  style,
  query,
} from "@angular/animations";

export const pageAnimation = trigger("pageAnimation", [
  transition("* => *", [
    group([
      query(
        ":enter",
        [
          style({ opacity: 0 }),
          animate(
     "0.5s",
            style({ opacity: 1 })
          ),
          animateChild(),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
