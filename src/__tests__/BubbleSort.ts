import bubble_sort from "./BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

export default function bubbleSort(arr: number[]){
    const len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}