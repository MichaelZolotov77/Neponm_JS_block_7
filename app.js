// Использование lodash
// 1) В файле app.js дан массив arr. Создайте на его основе массив с уникальными значениями, отсортированными от меньшего к большему. Значение сохраните в константе sortedArr.

// 2) Дан объект userSkills. Создайте на базе него новый объект userApprovedSkills, который будет содержать только ключи оригинального объекта, в которых есть значения, отличные от null и undefined.

const arr = [10, 1, 21, 1, 33, 3, 33, 5, 8, 8, 1, 3, 5];

const userSkills = {
  css: "b2",
  html: "c1",
  js: "a2",
  ts: null,
  react: undefined,
  vue: null,
  lodash: "a1",
};

const sortedArr = _.sortBy(_.uniq(arr));
console.log(sortedArr); // [1, 3, 5, 8, 10, 21, 33]

const userApprovedSkills = _.pickBy(userSkills, _.isString);
console.log(userApprovedSkills); //{css: 'b2', html: 'c1', js: 'a2', lodash: 'a1'}
