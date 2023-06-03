/**
 Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.

 The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 


 Параметры:
 depth (необязательный) - на сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1.

 The depth level specifying how deep a nested array structure should be flattened. Defaults to 1. 

 Возвращает:
 Новый массив с объединёнными в него подмассивами.
 A new array with the sub-array elements concatenated into it.

 !!!
 Метод flat удаляет пустые слоты из массива:
 The flat() method removes empty slots in arrays:

 */

export function initFlatPolyphile() {
  if (Array.prototype.myFlat) {
    return;
  }

  Array.prototype.myFlat = function (depth = 1) {
    /// проверка сущности
    if (!Array.isArray(this)) {
      throw new TypeError(
        `Array.prototype.myFlat was called on wrong type ${typeof this}`
      );
    }

    if (isNaN(depth) || depth <= 0) {
      return this;
    }

    function flatten(arr, depth) {
      const result = [];

      for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        /// используем рекурсию
        if (Array.isArray(currentElement) && depth > 0) {
          result.push(...flatten(currentElement, depth - 1));
        } else {
          result.push(currentElement);
        }
      }

      return result;
    }

    return flatten(this, depth);
  };
}
