
// 1

console.log(calculateWorkingHours("09:00", "17:30"));
console.log(calculateWorkingHours("10:00", "09:00"));

function calculateWorkingHours(start, end) {
    let startHour = parseInt(start.split(":")[0]);
    let startMinute = parseInt(start.split(":")[1]);

    let endHour = parseInt(end.split(":")[0]);
    let endMinute = parseInt(end.split(":")[1]);

    let totalStart = startHour * 60 + startMinute;
    let totalEnd = endHour * 60 + endMinute;

    const result = totalEnd - totalStart;

    return totalStart > totalEnd 
        ? "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas"
        : `Ish vaqti: ${Math.floor(result/60)} soat ${result % 60} minut`
}

// 2

const kun = +prompt("Ish kunini kiriting!");
console.log(findDay(kun));

function findDay(number) {
    const now = new Date();

    now.setDate(now.getDate() + number)

    return now.toDateString();
}

// 3


const jsonData1 = {
    user: {
      name: "Ali",
      age: 25,
      address: {
        city: "Tashkent",
        zip: "100000"
      }
    },
    active: true
};
  
const jsonData2 = {
    user: {
      name: "Ali",
      age: 30,
      address: {
        city: "Tashkent",
        zip: "200000"
      }
    },
    active: true
};
  
  console.log(findCommonPairs(jsonData1, jsonData2));
  
  function findCommonPairs(obj1, obj2) {
    const result = {};
    
    for (const key in obj1) {
      if (obj2.hasOwnProperty(key)) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && 
            obj1[key] !== null && obj2[key] !== null) {
          
          const nestedResult = findCommonPairs(obj1[key], obj2[key]);
          
          if (JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
            result[key] = obj1[key];
          } else if (Object.keys(nestedResult).length > 0) {
            result[key] = nestedResult;
          }
        } else if (obj1[key] === obj2[key]) {
          result[key] = obj1[key];
        }
      }
    }
    
    return result;
  }

