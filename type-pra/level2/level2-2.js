function getSpeed(speed) {
    switch (speed) {
        case "slow":
            return 10;
        case "medium":
            return 50;
        case "fast":
            return 200;
    }
}
// 使用例
var slowSpeed = getSpeed("slow");
var mediumSpeed = getSpeed("medium");
var fastSpeed = getSpeed("fast");
console.log(slowSpeed);
console.log(mediumSpeed);
console.log(fastSpeed);
// エラー例
// getSpeed("veryfast");
