function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength = nums1.length + nums2.length;
    const medianIndex = Math.floor(totalLength / 2);
    let i = 0, j = 0, count = 0;
    let prev = 0, current = 0;

    // Fusionar hasta llegar al índice de la mediana
    while (count <= medianIndex) {
        prev = current;
        if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
            current = nums1[i];
            i++;
        } else {
            current = nums2[j];
            j++;
        }
        count++;
    }

    // Calcular la mediana
    if (totalLength % 2 === 0) {
        console.log((prev + current) / 2)
        return (prev + current) / 2;
    }

    console.log(current)
    return current;
}


const nums12 = [1, 3];
const nums22 = [2];

findMedianSortedArrays(nums12, nums22);
