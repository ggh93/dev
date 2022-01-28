// 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
if (rows > 10) {
}

// 값의 의미를 명확히 기술하여 가독성이 향상되었다.
const MAXROWS = 10;
if (rows > MAXROWS) {
}
const template = `템플릿 리터럴은 '작은따옴표와' "큰따옴표를" 혼용ok `;
console.log(template);
