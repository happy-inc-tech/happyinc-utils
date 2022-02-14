# happyinc-utils

Хэлпер-функции, используемые в Happy Inc на JS

## Утилиты

#### arrayIntersection
Ищет пересекающиеся элементы в N массивов.
Пример:
```javascript
const intersection = arrayIntersection([1,2,3], [2,5,6], [10,11,2])
// [2]
```

#### arrayDifference
Ищет не пересекающиеся элементы в двух массивах.  
Аргументы: 
1. Массив 1;
2. массив 2;
3. `boolean` - удалять ли дублирующиеся элементы;
4. `valueGetter: CallableFunction` - функция получения значений из 
    элементов массива. По умолчанию возвращает само значение по индексу.
    Позволяет искать разницу по ключам объектов.  
Пример:
```javascript
const difference = arrayDifference([3,1,1,0,5,8], [1,2,5,4,8,12])
// [0, 1, 2, 3, 4, 12]
const difference = arrayDifference([3,1,1,0,5,8], [1,2,5,4,8,12], true)
// [0, 2, 3, 4, 12]
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

#### setPropertyByPath
Устанавливает в ключ объекта object по пути path значение value.  
Пример:
```javascript
const obj = { test: { values: [ { value: 0 } ] } };
setPropertyByPath(obj, 'test.values.0.value', 1);
// obj.test.values[0].value равен 1
```

#### stringifyClone
Создаёт копию объекта через JSON.  
Пример:
```javascript
const copy = stringifyClone({ test: 1 })
console.log(copy)
// { test: 1 }
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

#### shortRandomId
Создать случайный ID состоящий из 6 символов  
Пример:
```javascript
const id = shortRandomId();
console.log(id)
// '5yo9m1'
```

#### safelyToFixed
Безопасный toFixed, который не обвалит
фронтовое приложение в случае ошибки
Пример:
```javascript
const number = 1.1234;
const result = safelyToFixed(number, 2, 'test');
console.log(result)
// '1.12test'
```

#### randomInRange
Рандомное число из промежутка
Пример:
```javascript
const min = 5;
const max = 120;
const randomNumber = randomInRange(min, max);
console.log(randomNumber)
// 6
```

#### numberDeclension
Склонение числительных
by dizzy2 (http://jsfiddle.net/user/dizzy2/fiddles/)
Пример:
```javascript
const days = ['день', 'дня', 'дней'];
const day = 17;
const resultText = numberDeclension(day, days);
console.log(resultText)
// 'дней'
```

#### simpleRequest 
Отправить HTTP-запрос через XHR.
Параметр - объект:
* `url: string`;
* `method?: 'GET' | 'POST' | 'PUT' | 'DELETE'`;
* `body?: unknown`;
* `headers?: Record<string, string>`.
Пример:
```javascript
const result = await simpleRequest({
    url: 'test.com',
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    }
});
```

#### parseJwt
Вытащить данные из JWT-токена.  
Пример:
```javascript
parseJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6NDJ9.W8JXpGLOempbaX02d2b2EWYfiLlmhMqpvkYJT9oRhvg');
// { "value": 42 }
```

#### createEventBus
Создать простую шину событий.  
API шины:
* `dispatch(eventName: string, ...parameters: unknown[])` - отправить событие eventName, опционально - с данными;
* `subscribe(eventName: string, callback: CallableFunction): CallableFunction` - подписать слушателя callback на 
  событие eventName, возвращает функцию отписки;
* `once(eventName: string, callback: CallableFunction)` - подписаться только на одну отправку события,
    отписка происходит автоматически.  
Пример:
```javascript
const bus = createEventBus()

const usubscribe = bus.subscribe('test', (result) => console.log('Test event', result));
bus.dispatch('test', 1);
unsubscribe();
// 'Test event 1'
```

#### addStylesOverride
Добавляет переопределение стилей из строки.  
Пример:
```javascript
addStylesOverride('.myblock { margin-top: 10px; }')
```

#### debounce
Вызов функции f не более одного раза в ms секунд.  
Пример:
```javascript
function myHeavyOperation(arg) { /* ... */ }
const debounced = debounce(myHeavyOperation, 200)
debounced()
debounced()
// будет вызвана только 1 раз, следующий раз возможен только через 200 мс.
```

#### throttle
Вызов функции f не более одного раза в ms секунд. Если 
проигнорированный вызов является последним во время «задержки», 
то он выполняется в конце.  
Пример:
```javascript
function myHeavyOperation(arg) { /* ... */ }
const throttled = throttle(myHeavyOperation, 200)
window.onresize = throttled
```

#### delay
Задержка выполнения через setTimeout, завёрнутая в промис.  
Пример:
```javascript
await delay(200);
```

## Preact

#### useClassList
Хук. Реактивный список классов на основе объекта, где ключ - строка
(имя класса), а значение - Boolean (рендерить или нет).  
Пример:

```jsx
import useClassList from "./index";
import {useEffect} from "preact/compat";

function MyComponent() {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setTimeout(() => setDisabled(true), 1000);
    }, []);

    const classes = useClassList({
        block: true,
        disabled
    });

    return <div className={classes}/>
}

// Через секунду классы у div поменяются
```

#### useMounted
Хук. Позволяет отследить монтирование DOM.  
Пример:

```jsx
function MyComponent() {
    const mounted = useMounted()

    return (
        <div>
            {mounted && 'Mounted!'}
        </div>
    )
}
```

#### useOutsideClick
Хук. Проверка, случился ли клик внутри Ref или снаружи.  
Пример:
```jsx
function TestComponent() {
    const [visible, setVisible] = useState(true);
    const contentRef = useRef(null);

    useOutsideClick(contentRef, () => setVisible(false), visible);

    return (
        <div data-testid={'wrapper'}>
            <br /> <br />
            {visible && (
                <div data-testid={'content'} ref={contentRef}>
                    Content
                    <div data-testid={'content-child'} />
                </div>
            )}
        </div>
    );
}
// При клике на div с data-testid === content блок пропадёт
```

#### If/Else (conditions)
Компоненты-условия для читаемого отображения условной отрисовки.
Компонент `Else` должен быть вложен в `If`, и покажется только
если условие `cond` ложно. Блоков `Else` может быть несколько.
Поддерживаются вложенные условия.  
Пример:
```jsx
function TestComponent({ condition = true }) {
    return (
        <div>
            <If cond={condition}>
                <div>Condition true</div>
                <Else>
                    <div>Condition false</div>
                </Else>
            </If>
        </div>
    );
}
```