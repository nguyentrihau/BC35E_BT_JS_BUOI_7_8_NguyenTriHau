//Tao func domID:
function domID(a){return document.getElementById(a)};
// tao mang nguoi dung nhap:
var numArr=[];


/**
 *  - Thêm số vào Mảng
 * 
 */

domID("btnArr").onclick=function(){
    //Input:
    var arr=domID("arr").value*1;
    //Progress:
    numArr.push(arr);
    //output:
    domID("showInfoArr").innerHTML=numArr;

};
    

    
/**
 * Bài 1:Tính tống các số dương trong mảng
 */

 domID("btnTSD").onclick=function(){
    //Input:
    // var sum=0,i=0;i chay tu 0 den numArr;
    var sum=0;
    for(i=0;i<numArr.length;i++){
    //Progress:
    //neu neu gia tri trong mang dem cua i>0 thi sum+=numArr
        if(numArr[i]>0){
            sum+=numArr[i];
        };
    };
    //Output:
    domID("showInfoTSD").innerHTML="<i class='fa-solid fa-arrow-trend-up'></i> Tổng số dương: "+sum;
};

//Bài 2:Đếm có bao nhiêu số dương trong mảng
domID("btnDemSo").onclick=function(){
    //input:
    //soDuong=[],i=0;
    var soDuong=[];
    for(i=0;i<numArr.length;i++){
    //progress:
    //i chay tu 0 den nho hon độ dài mảng:
    // neu có số lớn hơn 0 thì ++soDuong;
        if(numArr[i]>0){
            ++soDuong
        };
    };
    //Output:
    domID("showInfoDemSo").innerHTML="<i class='fa-solid fa-hand'></i> Số dương là: "+soDuong;
};

//Bài 3:Tìm số nhỏ nhất
domID("btnSNN").onclick=function(){
    //Input:
    //cho snn là số đầu numArr[0],i=1;
    var SNN=numArr[0];
    for(i=1;i<numArr.length;i++){
    //Progress:
    //i lấy giá trị mang và chạy từ 1 tới bé hơn độ dài mảng;
    //neu numArr[i]< snn thì gán snn = numArr[i]
        if(numArr[i]<SNN){
            SNN=numArr[i];
        };
    };
    //Output:
    domID("showInfoSNN").innerHTML="<i class='fa-solid fa-calculator'></i> Số nhỏ nhất là: "+SNN;
};

//Bài 4:tìm số dương nhỏ nhất:
domID("btnSDNN").onclick=function(){
    //Input:lấy mảng numArr từ người nhập và tạo mảng lấy số dương từ người nhập
    var soDuong = [];
    for(i=0;i<numArr.length;i++){
    //Progress:
    // + tạo mảng và lấy số cac số dương trong mảng cũ:
    if(numArr[i]>0){
        soDuong.push(numArr[i]);
    }else{
        SDNN="không có số dương trong mảng";
    };
    };
// console.log(soDuong);
    // + lấy các số dương đó đem so sanh:
    // - tạo SDNN = soDuong[0]
    // - duyện mảng : j = 1;
    // - nếu soDuong[j] < SDNN thì SDNN = soDuong[j];
    var SDNN=soDuong[0];
    for(var j=1;j<soDuong.length;j++){
        if(soDuong[j]<SDNN){
            SDNN=soDuong[j]
        };
        };
    
    //Output:
    domID("showInfoSDNN").innerHTML="<i class='fa-solid fa-calculator'></i> Số nhỏ dương nhất là: "+SDNN;

};

//Bài 5:Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
domID("btnSCCC").onclick=function(){
    //Input:
    // Tạo biến soChan = 1;(vì đề ghi nếu ko có giá trị chẵn thì trả về -1)
    // Duyệt mảng: i = 0;
    var soChan = -1;
    for(i=0;i<numArr.length;i++){
    //Progress:
    //nếu giá trị mảng chia hết cho 2 thì cho soChan nhận giá trị đó là giá trị cuối cùng.
    //khi chay toi gia trị cuoi trong mảng chia het cho 2 thi soChan = số chẵn cuối chia hết cho 2;
        if(numArr[i]%2===0){
            soChan=numArr[i];
        };
    };
    
    //Output:
    domID("showInfoSCCC").innerHTML="Số chẵn cuối cùng là: "+soChan;

};

//Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
// - tạo hàm đổi vị trí:
function change(a,b){
    /**
     *  - Input:
     *  + a,b:người dùng nhập vị trí cần đổi
     *  + c:biến chứa để đổi vị trí
     *  - progress:
     *  cho c = vị trí giá trị mảng a
     *  vị trí mảng a bằng vị trí mảng b
     *  còn mảng b sẽ bằng vị trí mảng c(vị trí mảng a ban đầu)
     */
    var c = numArr[a];
    numArr[a] = numArr[b];
    numArr[b] = c;
}

domID("btnDC").onclick=function(){
    //input: dom 2 gia tri nguoi nhap vao 2 tham so:
    //progress: chay function da tao => change(a,b):
    change(domID("number1").value*1,domID("number2").value*1);
    //Output:
    domID("showInfoDC").innerHTML="Mảng sau khi đổi: "+numArr;

};

//Bài 7:Sắp xếp mảng theo thứ tự tăng dần.
domID("btnSapXep").onclick=function(){
    /**
     * progress:
     * chạy vòng lặp lòng nhau:
     * duyệt mảng i = 0;
     * đk: i < độ dài mảng - 1(ss từng cặp nên j tới độ dài của mảng tiếp theo rồi nên i phải trừ 1)
     * duyệt mảng j=i+1;(để so sánh từng cặp số trong vòng lặp)
     * 
     */
    for(var i=0;i<numArr.length-1;i++){
        for(var j=i+1;j<numArr.length;j++){
            if(numArr[i]>numArr[j]){
                //đổi chỗ, dùng hàm bài 6 đã gọi.
                change(i,j);
            };
        };
    };
    // cách nhanh:
    // numArr.sort(function(a,b){a-b});
    //Output:
    domID("showInfoSapXep").innerHTML="Mảng sau khi sắp xếp: "+numArr;
};

//Bài 8:Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.

//Tạo hàm checkSNT
function checkSNT(n){
    //flag = true =>  cong vao kq
    //flag = false => break ko chay xun de cong vao kq   
    //cho số đó là số nguyên tố flag = true;
    var flag = true;
    //so nguyen to phai lon hon 1
    if(n<2){
        flag = false; 
    };
    //duyet mảng a=2;
  for( var a = 2 ; a <= Math.sqrt(n) ; a++) {
        if ( n % a === 0  ){
            //nếu n chia hết cho a đúng thì n ko phải là snt nên trả về false
            flag = false;
            break ;
        };
    };
    return flag;
};

//tim số nguyên tố đầu
domID("btnSNTDT").onclick=function(){
    //Input: SNTDtien=-1(vì đề ghi nếu ko có số nguyên tố thì bằng -1); Duyệt mảng:i=0;
    var soNTDtien=-1;
    for(var i=0;i<numArr.length;i++){
    //Progress:check số nguyên tố nếu đúng thi lấy gia trị và break để lấy số nguyên tố đầu tiên trong mảng;
        if(checkSNT(numArr[i])){
            soNTDtien = numArr[i];
            break;
        };
    };
    domID("showInfoSNTDT").innerHTML="Số nguyên tố đầu tiên là: "+soNTDtien;
};

//Bài 9:Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên

//thêm số vào mảng mới:
var numArrTwo=[];
domID("btnThemSo").onclick=function(){
    //input:
    var themSo=domID("themSo").value*1;
    //progress:
    numArrTwo.push(themSo);
    //Output:
    domID("showInfoThemSo").innerHTML=numArrTwo;
};
//tìm số nguyên trong mảng:
domID("btnDSN").onclick=function(){
    //input:
    //tạo biến đếm: count=0;
    //duyệt mảng i=0
    var count=0;
    var kq="";
    for(i=0;i<numArrTwo.length;i++){
        if(Number.isInteger(numArrTwo[i])){
            kq=count++;console.log(kq);
        };
    };
    domID("showInfoDSN").innerHTML=count;
};


//Bài 10:So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
domID("btnSoSanh").onclick=function(){
    //Input:
    var demDuong=0;
    var demAm = 0;
    var kq="";
    for(i=0;i<numArr.length;i++){
    //Progress:đếm số âm và dương để so sánh
    //duyệt mảng i=0;
    //nếu giá trị của mảng bé hơn 0 thì đếm âm +1;
    //nếu giá trị của mảng lớn hơn 0 thì đếm dương +1;
        if(numArr[i]<0){
            demAm++;
        }else if(numArr[i]>0){
            demDuong++;
        };
    };
    //nếu đếm âm lớn hơn đếm dương thì số âm nhiều hơn số dương;
    //nếu đếm âm nhỏ hơn đếm dương thì số âm ít hơn số dương;
    //nếu đếm âm bằng đếm dương thì số âm bằng số dương;
    if(demAm>demDuong){
        kq="Số âm > Số dương(số lượng số âm nhiều hơn số lượng số dương)";
    }else if(demAm<demDuong){
        kq="Số âm < Số dương(số lượng số âm ít hơn số lượng số dương)";
    }else {
        kq="Số âm = Số dương(số lượng số âm bằng số lượng số dương)";
    };
    //Output:
    domID("showInfoSoSanh").innerHTML=kq;
};
