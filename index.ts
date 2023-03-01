import {
  AsyncSubject,
  BehaviorSubject,
  fromEvent,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next('sebepsiz boş yere ayrılacak');
//   subscriber.complete();
//   subscriber.next(3);
// });

// observable.subscribe((data) => console.log(data));

// const subject = new Subject();

// subject.subscribe((data) => {
//   console.log(`ObserverA ${data}`);
// });

// subject.subscribe((data) => {
//   console.log(`ObserverB ${data}`);
// });

// subject.next(3);
// subject.next(5);
// subject.next(7);
// subject.next(9);
// subject.next('Deneme');

// const subject = new BehaviorSubject(1);

// subject.subscribe((data) => {
//   console.log(`ObserverA ${data}`);
// });

// subject.subscribe((data) => {
//   console.log(`ObserverB ${data}`);
// });

// subject.next(3);
// subject.next(5);
// subject.next(7);
// subject.subscribe((data) => {
//   console.log(`ObserverC ${data}`);
// });
// subject.next(9);
// subject.next(10);

// const subject = new ReplaySubject();

// subject.subscribe((data) => {
//   console.log(`ObserverA ${data}`);
// });

// subject.subscribe((data) => {
//   console.log(`ObserverB ${data}`);
// });

// subject.next(3);
// subject.next(5);
// subject.next(7);
// subject.subscribe((data) => {
//   console.log(`ObserverC ${data}`);
// });
// subject.next(9);
// subject.next(10);

// const subject = new AsyncSubject();

// subject.subscribe((data) => {
//   console.log(`ObserverA ${data}`);
// });

// subject.subscribe((data) => {
//   console.log(`ObserverB ${data}`);
// });

// subject.next(3);
// subject.complete();
// subject.next(5);
// subject.next(7);
// subject.subscribe((data) => {
//   console.log(`ObserverC ${data}`);
// });
// subject.next(9);
// //subject.complete();
// subject.next(10);

// const button = document.getElementsByTagName('button')[0];

// const obs = fromEvent(button, 'click');

// obs.subscribe((e) => {
//   console.log(e);
// });
