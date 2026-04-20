function houseRobber(uylar) {
    if (uylar.length === 0) return 0;
    if (uylar.length === 1) return uylar[0];

    let maxPul = new Array(uylar.length);
    maxPul[0] = uylar[0];
    maxPul[1] = Math.max(uylar[0], uylar[1]);

    for (let i = 2; i < uylar.length; i++) {
        maxPul[i] = Math.max(maxPul[i-1], maxPul[i-2] + uylar[i]);
    }

    return maxPul[uylar.length - 1];
}

// Test qo'llanishi
let uylar = [2, 7, 9, 3, 1];
console.log(houseRobber(uylar)); // 12
