import {useList} from 'react-use'

const Demo = () => {
  const [
    list,
    {
      set,
      push,
      updateAt,
      insertAt,
      update,
      updateFirst,
      upsert,
      sort,
      filter,
      removeAt,
      clear,
      reset,
    },
  ] = useList([1, 2, 3, 4, 5])

  return (
    <div>
      <button onClick={() => set([1, 2, 3])}>Set to [1, 2, 3]</button>
      <button onClick={() => push(Date.now())}>Push timestamp</button>
      <button onClick={() => updateAt(1, Date.now())}>
        Update value at index 1
      </button>
      <button onClick={() => removeAt(1)}>Remove element at index 1</button>
      <button onClick={() => filter(item => item % 2 === 0)}>
        Filter even values
      </button>
      <button onClick={() => sort((a, b) => a - b)}>Sort ascending</button>
      <button onClick={() => sort((a, b) => b - a)}>Sort descending</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  )
}

export default Demo

/* list: T{} — current list;
set: (list: T[]) => void; — Set new list instead old one;
push: (...items: T[]) => void; — Add item(s) at the end of list;
updateAt: (index: number, item: T) => void; — Replace item at given position. If item at given position not exists it will be set;
insertAt: (index: number, item: T) => void; — Insert item at given position, all items to the right will be shifted;
update: (predicate: (a: T, b: T) => boolean, newItem: T) => void; — Replace all items that matches predicate with given one;
updateFirst: (predicate: (a: T, b: T) => boolean, newItem: T) => void; — Replace first item matching predicate with given one;
upsert: (predicate: (a: T, b: T) => boolean, newItem: T) => void; — Like updateFirst but in case of predicate miss - pushes item to the list;
sort: (compareFn?: (a: T, b: T) => number) => void; — Sort list with given sorting function;
filter: (callbackFn: (value: T, index?: number, array?: T[]) => boolean, thisArg?: any) => void; — Same as native Array's method;
removeAt: (index: number) => void; — Removes item at given position. All items to the right from removed will be shifted;
remove: (index: number) => void; — DEPRECATED: Use removeAt method instead;
clear: () => void; — Make the list empty;
reset: () => void; — Reset list to initial value; */
