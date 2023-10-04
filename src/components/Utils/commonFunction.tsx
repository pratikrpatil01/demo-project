import { useMemo } from 'react';

function formatText(text) {
  return text.replaceAll('_', ' ');
}

const capitalizedArray = (myArray) => {
  const newData = myArray.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  return newData;
};

function* deepKeys(t, pre = []) {
  if (Array.isArray(t)) return;
  else if (Object(t) === t)
    for (const [k, v] of Object.entries(t)) yield* deepKeys(v, [...pre, k]);
  else yield pre.join('.');
}

const Columns = (data) => {
  var columns = useMemo(
    () =>
      data &&
      data.map((name: any) => ({
        accessorKey: name,
        header: formatCapitalize(name)
        // size: 300
      })),
    [data] // Add data as a dependency
  );
  return columns;
};

function allReplace(str, obj) {
  for (const x in obj) {
    str = str?.replace(new RegExp(x, 'g'), obj[x]);
  }
  return str;
}

// ################################################  for charts ########################################
const uniqs = (data) => {
  var uniq =
    data &&
    data[0].reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
      return acc;
    }, {});
  return uniq;
};
const uniqsarr = (data) => {
  var uniq =
    data &&
    data.reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
      return acc;
    }, {});
  return uniq;
};

const flattenObj = (ob) => {
  let result = {};
  for (const i in ob) {
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[i + '.' + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};

function getFields(input, field) {
  var output = [];
  for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
  return output;
}
function replaceDot(text) {
  //    const test= text.replaceAll("/", "_");
  const tests = text.replaceAll('/', '');
  return tests.replaceAll('.', ' ');
}
const replaceAllObjKeys = (obj, getNewKey) => {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      replaceAllObjKeys(obj[i], getNewKey);
    }
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      const newKey = getNewKey(key);
      obj[newKey] = obj[key];
      if (key !== newKey) {
        delete obj[key];
      }
      replaceAllObjKeys(obj[newKey], getNewKey);
    }
  }

  return obj;
};

const objectkey = (item) => {
  const data = Object.keys(item);
  return data;
};
function arrayReduce(data) {
  const newData = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return newData;
}
function formatCapitalize(text: string) {
  const arr = text.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(' ');
  return str2;
}
function sortObject(obj) {
  return Object.entries(obj).sort((a: any, b: any) => b[1] - a[1]);
}
function uperCase(text) {
  return text.toUpperCase();
}
export {
  deepKeys,
  Columns,
  allReplace,
  uniqs,
  flattenObj,
  getFields,
  capitalizedArray,
  replaceDot,
  replaceAllObjKeys,
  objectkey,
  uniqsarr,
  formatText,
  arrayReduce,
  formatCapitalize,
  sortObject,
  uperCase
};
