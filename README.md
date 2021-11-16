# happyinc-utils

### Хэлпер-функции, используемые в Happy Inc на JS

#### 1. arrayIntersection
Ищет пересекающиеся элементы в N массивов.
Пример:
```javascript
const intersection = arrayIntersection([1,2,3], [2,5,6], [10,11,2])
// [2]
```

#### 2. capitalizeFirstLetter
Делает первую букву в строке заглавной.  
Пример:
```javascript
capitalizeFirstLetter('string')
// 'String'
```

#### 3. chunkArray
Делит массив на части размером по переданному аргументу.  
Пример:
```javascript
chunkArray([1,2,3,4,5], 2)
// [[1,2], [3,4], [5]]
```

#### 4. decapitalizeFirstLetter
Делает первую букву в строке строчной.  
Пример:
```javascript
capitalizeFirstLetter('String')
// 'string'
```

#### 5. isUUID
Является ли введённая строка UUID.  
Пример: 
```javascript
isUUID('70f48ad9-6cc9-4f86-919d-022972187da2') // true
isUUID('string') // false 
```

#### 6. notNullish
Является ли переданное значение логически непустым
(не равно `null`, `undefined`, `NaN`).  
Пример: 
```javascript
notNullish(0) // true 
notNullish(false) // true 
notNullish(NaN) // false
notNullish(null) // false
```

#### 7. parseQueryString
Превращает строку с query-параметрами в объект
ключ-значение, и то, и другое - строки. Можно
передать параметр, а если входных параметров нет - 
берётся `window.location.search`.  
Пример:
```javascript
parseQuery('?value=test&count=1')
// { value: 'test', count: '1' }
```

#### 8. randomUUID
Возвращает случайный UUID.  
Пример:
```javascript
randomUUID() // '1d63cd68-284d-4ca9-a4a2-d18170cc8186'
```

#### 9. VueReactiveMap
Эмуляция ES6 Map на объектах для поддержки реактивности в Vue2.  
Пример: 
```javascript
const objKey = { a: 1 }
const map = new VueReactiveMap([ [NaN, '3'], [objKey, '4'] ]);

map.get(NaN) // '3'
map.get(objKey) // '4'
map.set(NaN, '5')
map.has(NaN) // true
```
Реализованы все методы, поведение максимально приближено
к реальному.