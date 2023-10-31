const fact = (n) => { 
	if(n==0)
      return 1;
    var res = 1; 
    for (var i = 2; i <= n; i++) 
        res = res * i; 
    return res; 
} 

function nCr(n, r) 
{ 
	return fact(n) / (fact(r) * fact(n - r)); 
} 

function poly(str) {
	const obSplit = str.split(/[()^]/)
	if(obSplit.slice(-1) == 0){
		return '1'
	}else if(obSplit.slice(-1) == 1){
		return str.split(/[()^]/)[1]
	}else{
		const idxSplit = obSplit[1].split(/[+-]/)
		const n = parseInt(obSplit.slice(-1))

		const minusSignCount = (obSplit[1].match(/-/g) || []).length

		if(minusSignCount === 0 || minusSignCount === 2 && n%2 === 0){
			

			var ans = ''
			if(idxSplit[0].length === 2){
				var variable = idxSplit[0][1]
				var stCoNum = idxSplit[0][0]
				var lastCoNum = idxSplit[1][0]
			}else if(idxSplit[0].length === 1){
				var variable = idxSplit[0][0]
				var stCoNum = 1
				var lastCoNum = idxSplit[1][0]
			}


			for(r = 0; r < n + 1; r++){
				var ansCoEf = nCr(n, r) * Math.pow(stCoNum, n - r) * Math.pow(lastCoNum, r)
				
				ans += `${ansCoEf === 1 && n-r !== 0 ? '' : ansCoEf}${n-r == 0 ? '' : variable}${n-r === 0 || n-r === 1 ? '' : '^'}${n-r === 0 || n-r === 1 ? '' : n-r}`
				if(r < n) {
					if(obSplit[1][0] && obSplit[1][-1] === '-'){
						for(i = 0; i < n+1; i++){
							ans += '-'
						}
					}
					ans += '+'
				}
			}

		} else if (minusSignCount === 0 || minusSignCount === 2 && n%2 !== 0){

				var ans = '-'

				if(idxSplit[1].length === 2){
					var variable = idxSplit[1][1]
					var stCoNum = idxSplit[1][0]
					var lastCoNum = idxSplit[2][0]
				}else if(idxSplit[1].length === 1){
					var variable = idxSplit[1][0]
					var stCoNum = 1
					var lastCoNum = idxSplit[2][0]
				}

				for(r = 0; r < n + 1; r++){
					var ansCoEf = nCr(n, r) * Math.pow(stCoNum, n - r) * Math.pow(lastCoNum, r)
					
					ans += `${ansCoEf === 1 && n-r !== 0 ? '' : ansCoEf}${n-r == 0 ? '' : variable}${n-r === 0 || n-r === 1 ? '' : '^'}${n-r === 0 || n-r === 1 ? '' : n-r}`
					if(r < n) {
						if(obSplit[1][0] && obSplit[1][-1] === '-'){
							for(i = 0; i < n+1; i++){
								ans += '-'
							}
						}
						ans += '-'
					}
					}
					return ans
		} else {

			var ans = ''

			if(idxSplit.length === 3){
				if(idxSplit[1].length === 2){
					var variable = idxSplit[1][1]
					var stCoNum = idxSplit[1][0]
					var lastCoNum = idxSplit[2][0]
				}else if(idxSplit[1].length === 1){
					var variable = idxSplit[0][0]
					var stCoNum = 1
					var lastCoNum = idxSplit[1][0]
				}
			}else if(idxSplit.length === 2){
				if(idxSplit[0].length === 2){
					var variable = idxSplit[0][1]
					var stCoNum = idxSplit[0][0]
					var lastCoNum = idxSplit[1][0]
				}else if(idxSplit[0].length === 1){
					var variable = idxSplit[0][0]
					var stCoNum = 1
					var lastCoNum = idxSplit[1][0]
				}
			}

			for(r = 0; r < n + 1; r++){
				var ansCoEf = nCr(n, r) * Math.pow(stCoNum, n - r) * Math.pow(lastCoNum, r)
				
				ans += `${ansCoEf === 1 && n-r !== 0 ? '' : ansCoEf}${n-r == 0 ? '' : variable}${n-r === 0 || n-r === 1 ? '' : '^'}${n-r === 0 || n-r === 1 ? '' : n-r}`
				if(r < n) {
					ans += r%2 === 0 ? '-' : '+' 
				}
				}
				return ans
		}
			return ans
	}
}

// =====================================
// ไฟล์ส่วนล่างนี้เป็นตัวอย่าง input output (test case)
// ห้ามแก้ไข!
// วิธีการรันคือ 
//   1. เปิด terminal
//   2. cd เข้ามาที่โปรเจ็คปัจจุบัน
//   3. รัน node เว้นวรรค ตามด้วยชื่อไฟล์
//   4. หาก โปรแกรมทำงานถูกต้องจะขึ้น true ทั้งหมด
// =====================================
function test(obj) {
	console.log(obj.index + ": ", poly(obj.input) === obj.output);
}
test({
	index: 1,
	input: "(x+1)^0",
	output: "1",
});
test({
	index: 2,
	input: "(x+1)^1",
	output: "x+1",
});
test({
	index: 3,
	input: "(x+1)^2",
	output: "x^2+2x+1",
});
test({
	index: 4,
	input: "(x-1)^0",
	output: "1",
});
test({
	index: 5,
	input: "(x-1)^1",
	output: "x-1",
});
test({
	index: 6,
	input: "(x-1)^2",
	output: "x^2-2x+1",
});
test({
	index: 7,
	input: "(5m+3)^4",
	output: "625m^4+1500m^3+1350m^2+540m+81",
});
test({
	index: 8,
	input: "(2x-3)^3",
	output: "8x^3-36x^2+54x-27",
});
test({
	index: 9,
	input: "(7x-7)^0",
	output: "1",
});
test({
	index: 10,
	input: "(-5m+3)^4",
	output: "625m^4-1500m^3+1350m^2-540m+81",
});
test({
	index: 11,
	input: "(-2k-3)^3",
	output: "-8k^3-36k^2-54k-27",
});
test({
	index: 12,
	input: "(-7x-7)^0",
	output: "1",
});
test({
	index: 13,
	input: "(-c-4)^7",
	output: "-c^7-28c^6-336c^5-2240c^4-8960c^3-21504c^2-28672c-16384",
});
