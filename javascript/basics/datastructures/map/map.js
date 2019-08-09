/** Map stores pairs key/value, the difference between Map and Object is that map will not cas keys to strings, we can store key as different datatypes.
 * 
 * new Map() – creates the map.
 *map.set(key, value) – stores the value by the key.
 *map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 *map.has(key) – returns true if the key exists, false otherwise.
 *map.delete(key) – removes the value by the key.
 *map.clear() – removes everything from the map.
 *map.size – returns the current element count.
 * 
 */

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

//exercise

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(salaries){
      let result=0;
    
          for(let value of Object.values(salaries)){
            result+=value;
          }
      return result;
  }
  alert(sumSalaries(salaries));
