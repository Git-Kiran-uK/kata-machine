import two_crystal_balls from "./TwoCrystalBalls";

test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
    expect(twoCrystalBalls([false, false, false, true, true, true])).toEqual(3);
    expect(twoCrystalBalls([true, true, true, true, true, true])).toEqual(0);
    expect(twoCrystalBalls([false, false, true, true, true, true, true ,true, true, true, true, true, true])).toEqual(2);
});

export default function twoCrystalBalls(arr: boolean[]){
    const jumpAmount: number = Math.floor(Math.sqrt(arr.length));
    for(let i = jumpAmount; i < arr.length; i += jumpAmount){
        if(arr[i]){
            for(let j = i - jumpAmount; j < i; j++){
                if(arr[j]) return j;
            }
        }
    }
    return -1;
}