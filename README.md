# happyinc-utils

### Хэлпер-функции, используемые в Happy Inc на JS

#### arrayIntersection
Ищет пересекающиеся элементы в N массивов.
Пример:
```javascript
const intersection = arrayIntersection([1,2,3], [2,5,6], [10,11,2])
// [2]
```

#### capitalizeFirstLetter
Делает первую букву в строке заглавной.  
Пример:
```javascript
capitalizeFirstLetter('string')
// 'String'
```

#### chunkArray
Делит массив на части размером по переданному аргументу.  
Пример:
```javascript
chunkArray([1,2,3,4,5], 2)
// [[1,2], [3,4], [5]]
```

#### decapitalizeFirstLetter
Делает первую букву в строке строчной.  
Пример:
```javascript
capitalizeFirstLetter('String')
// 'string'
```

#### downloadFileFromBlob
Скачивает файл из объекта Blob (к примеру, если файл запрошен
через Fetch).  
Пример: 
```javascript
const myFile = await fetchFile();
downloadFileFromBlob(myFile, 'My_file.txt')
```

#### getPropertyByPath 
Возвращает значение по пути path из объекта object, не 
выбрасывая ошибок в случае отсутствия какого-либо сегмента.
Если значения нет - возвращает `undefined`.  
Поддерживается только разделение точкой. Поддерживаются индексы массивов.  
Пример:
```javascript
// user.data.activity.likes[0] = { from: '123', time: '...' } 
const likes = getPropertyByPath(user, 'data.activity.likes.0.from')
// '123
```

#### isUUID
Является ли введённая строка UUID.  
Пример: 
```javascript
isUUID('70f48ad9-6cc9-4f86-919d-022972187da2') // true
isUUID('string') // false 
```

#### notNullish
Является ли переданное значение логически непустым
(не равно `null`, `undefined`, `NaN`).  
Пример: 
```javascript
notNullish(0) // true 
notNullish(false) // true 
notNullish(NaN) // false
notNullish(null) // false
```

#### parseQueryString
Превращает строку с query-параметрами в объект
ключ-значение, и то, и другое - строки. Можно
передать параметр, а если входных параметров нет - 
берётся `window.location.search`.  
Пример:
```javascript
parseQuery('?value=test&count=1')
// { value: 'test', count: '1' }
```

#### randomUUID
Возвращает случайный UUID.  
Пример:
```javascript
randomUUID() // '1d63cd68-284d-4ca9-a4a2-d18170cc8186'
```

#### VueReactiveMap
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

#### walk
Обход всех уровней вложенных объектов и массивов. На каждый уровень
вызывается переданный коллбэк.  
Аргументы: объект\массив, коллбэк, ключ для свойства вложенных (по 
умолчанию - `children`).  
Пример:
```javascript
const obj = { id: 1, children: [ { id: 2 } ] };
const collectedIds = [];
walk(obj, (node) => collectedIds.push(node.id), 'children')
console.log(collectedIds)
// [1, 2]
```