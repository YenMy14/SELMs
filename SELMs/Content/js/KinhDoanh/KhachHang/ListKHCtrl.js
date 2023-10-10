var app = angular.module("myApp", []);

app.controller('ListKHCtrl', function ($scope, $http, $sce) {
    var username = $('#username').val();
    var isadmin = $('#isadmin').val();
    $scope.username = $('#username').val();
    $scope.tukhoa1 = "";
    $scope.tukhoa2 = "";
    $scope.tukhoa3 = "";
    $scope.tukhoa4 = "";
    $scope.tukhoa5 = "";
    $scope.tukhoa6 = "";
    $scope.tukhoa7 = "";

    $scope.today = new Date();

    var dd = $scope.today.getDate();
    var mm = $scope.today.getMonth() + 1; //January is 0!

    var yyyy = $scope.today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    $scope.NgayHomNay = dd + '/' + mm + '/' + yyyy;


    $scope.ErrorSystem = function (errorMessage) {
        // This function handles errors and displays the error message as a notification.
        var notificationElement = document.getElementById('notification');
        notificationElement.textContent = 'Error: ' + errorMessage;
        notificationElement.style.backgroundColor = '#f5aaaa';
        notificationElement.style.width = '300px';
        notificationElement.style.height = '50px';
        notificationElement.style.textAlign = 'center';
        notificationElement.style.paddingTop = '15px';

        // You can customize the notification style and appearance here.
    }

    $scope.SuccessSystem = function (successMessage) {
        console.log("ok");
        // This function handles success messages and displays the success message as a notification.
        var notificationElement = document.getElementById('notification');
        notificationElement.textContent = 'Success: ' + successMessage;
        notificationElement.style.backgroundColor = '#97c797';
        notificationElement.style.width = '300px';
        notificationElement.style.height = '50px';
        notificationElement.style.textAlign = 'center';
        notificationElement.style.paddingTop = '15px';


        // You can customize the notification style and appearance here.
    }

   
   
    //===============Danh sách khách hàng=====================
    $scope.page = 1;
    $scope.makhachhang = '';
    $scope.tencongty = '';
    $scope.tinh = '';
    $scope.phanloai = '---';
    $scope.vendor_status = 0;
    $scope.dieukhoan = '';
    $scope.tructhuoc = 'TAHCM';
    
    $scope.LoadListKhachHang = function (sotrang) {
        var data = {
            tukhoa1: $scope.makhachhang,
            tukhoa2: $scope.tencongty,
            tukhoa3: $scope.tinh,
            tukhoa4: $scope.phanloai,
            tukhoa5: $scope.dieukhoan,
            term: $scope.vendor_status,
            tructhuoc: $scope.tructhuoc,
            username: username,
            isadmin: 0,
            sotrang: 1
        }
        $scope.page = sotrang;
        data.sotrang = sotrang
        $http.post(origin + '/api/Api_KhachHang/GetListKhachHangNew', data).then(function (response) {
            $scope.ListKhachHang = response.data;
        });
    }
    $scope.LoadListKhachHang(1);
    $scope.SearchKhachHang = (field, value) => {
        data[field] = value;
        $scope.LoadListKhachHang(1);
    }

    $scope.GetDetailKH = function (kh) {
        $scope.item = kh;
        $scope.LoadListLienHeKhachHang(kh);
        $scope.LoadListPhanHoiKhachHang(kh);
    }
    
    $scope.LoadListLienHeKhachHang = function (item) {
        var data = {
            makhachhang: item.MA_KHACH_HANG
        }
        $http.post(origin + '/api/Api_KhachHang/GetListLienHeKhachHangNew', data).then(function (response) {
            $scope.list_lienhe = response.data;
        });
    }
    $scope.LoadListPhanHoiKhachHang = function (item) {
        var data = {
            makhachhang: item.MA_KHACH_HANG
        }
        $http.post(origin + '/api/Api_KhachHang/GetListPhanHoiKhachHangNew', data).then(function (response) {
            $scope.list_phanhoi = response.data;
        });
    }
})