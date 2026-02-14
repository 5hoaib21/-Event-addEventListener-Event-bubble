console.log('hello dear');


document
        .getElementById("btn-update-title")
        .addEventListener("click", function () {
          // console.log(object);
          const pageTitleEl = document.getElementById("page-title");
          pageTitleEl.innerText = "Updated Page Title Text";
        });
        //
        //
        document.getElementById('btn-login')
      .addEventListener('click', function (){
        // console.log('hey you are');
        const userInfoEl = document.getElementById('user-info')
        userInfoEl.innerText= 'user Logged In successfully !'
      })