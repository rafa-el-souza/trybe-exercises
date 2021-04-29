let percent = 30;

switch (true) {
    case (percent > 100 || percent < 0):
        console.log("error");
        break;
    case (percent >= 90):
        console.log("A");
        break;
    case (percent >= 80):
        console.log("B");
        break;
    case (percent >= 70):
        console.log("C");
        break;
    case (percent >= 60):
        console.log("D");
        break;
    case (percent >= 50):
        console.log("E");
        break;
    case (percent < 50):
        console.log("F");
        break;
    default:
        console.log("error");
}
