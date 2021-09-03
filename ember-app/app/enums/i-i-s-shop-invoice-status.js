import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  New: 'Новая',
  Issued: 'Выписанная',
  Paused: 'Приостановленная',
  Ready: 'Готовая',
  Shipped: 'Отгруженная'
});
