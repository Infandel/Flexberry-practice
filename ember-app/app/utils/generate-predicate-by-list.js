import Condition from 'ember-flexberry-data/query/condition';
import {
  SimplePredicate,
  ComplexPredicate,
  NotPredicate
} from 'ember-flexberry-data/query/predicate';
import { isNone } from '@ember/utils';

/**
 * Генерировать комплексный предикат по списку значений.
 * @param {*} condition Логический оператор для комплексного предиката.
 * @param {*} propertyName Имя свойства.
 * @param {*} filterOperator Оператор сравнения.
 * @param {*} listOfExpectedValues Список значений.
 * @returns Предикат.
 */
function generateComplexPredicateByList(condition, propertyName, filterOperator, listOfExpectedValues) {
  let resultPredicate;
  listOfExpectedValues.forEach(expectedValue => {
    const predicate = new SimplePredicate(propertyName, filterOperator, expectedValue);
    if (isNone(resultPredicate)) {
      resultPredicate = predicate;
    }  else {
      resultPredicate = new ComplexPredicate(condition, resultPredicate, predicate);
    }
  });
  return resultPredicate;
}

/**
 * Генерировать предикат логического или по списку значений.
 * @param {*} propertyName Имя свойства.
 * @param {*} filterOperator Оператор сравнения.
 * @param {*} listOfExpectedValues Список значений.
 * @returns Предикат.
 */
 function generateOrPredicateByList(propertyName, filterOperator, listOfExpectedValues) {
  return generateComplexPredicateByList(Condition.Or, propertyName, filterOperator, listOfExpectedValues);
}

/**
 * Генерировать отрицание предиката логического или по списку значений.
 * @param {*} propertyName Имя свойства.
 * @param {*} filterOperator Оператор сравнения.
 * @param {*} listOfExpectedValues Список значений.
 * @returns Предикат.
 */
function generateNotOrPredicateByList(propertyName, filterOperator, listOfExpectedValues) {
  if (listOfExpectedValues.length > 0) {
    return new NotPredicate(generateOrPredicateByList(propertyName, filterOperator, listOfExpectedValues));
  }
  return undefined;
}

export {
  generateComplexPredicateByList,
  generateOrPredicateByList,
  generateNotOrPredicateByList
};
