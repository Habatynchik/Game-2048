$(document).ready(function () {
    new YoutubeOverlayModule
    var img = $("#exampleImage");
    var configObject = {
        sourceUrl: img.attr("data-videourl"),
        triggerElement: "#" + img.attr("id"),
        progressCallback: function () {
            console.log("Callback Invoked.");
        }
    };

    var videoBuild = new YoutubeOverlayModule(configObject);
    videoBuild.activateDeployment();


    let array = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    let score = 0;
    newRand();
    refresh();

    function randomNumber() {

        if (Math.floor(Math.random() * 10) < 7)
            return 2
        else return 4
    }

    function refresh() {


        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                style(i, j);
                if (array[i][j] != 0) {
                    $("#".concat(i).concat(j)).text(array[i][j]);
                } else
                    $("#".concat(i).concat(j)).text(" ");
            }
        }
        $("#score").text(score);

    }

    function style(i, j) {

        switch (array[i][j]) {
            case 0:
                $("#".concat(i).concat(j)).css({
                    "background": "#EEE4DA59",
                    "color": "#776e65",
                    "font-size": "60px",
                })
                break;
            case 2:
                $("#".concat(i).concat(j)).css({
                    "background": "#eee4da",
                    "color": "#776e65",
                    "font-size": "60px",
                })
                break;
            case 4:
                $("#".concat(i).concat(j)).css({
                    "background": "#eee1c9",
                    "color": "#776e65",
                    "font-size": "60px",
                })
                break;
            case 8:
                $("#".concat(i).concat(j)).css({
                    "background": "#F3B27A",
                    "color": "#F9F6F2",
                    "font-size": "60px",
                })
                break;
            case 16:
                $("#".concat(i).concat(j)).css({
                    "background": "#F69664",
                    "color": "#F9F6F2",
                    "font-size": "60px",
                })
                break;
            case 32:
                $("#".concat(i).concat(j)).css({
                    "background": "#F77C5F",
                    "color": "#F9F6F2",
                    "font-size": "60px",
                })
                break;
            case 64:
                $("#".concat(i).concat(j)).css({
                    "background": "#F75F3B",
                    "color": "#F9F6F2",
                    "font-size": "60px",
                })
                break;
            case 128:
                $("#".concat(i).concat(j)).css({
                    "background": "#FBE0B3",
                    "color": "#776e65",
                    "font-size": "60px",
                })
                break;
            case 256:
                $("#".concat(i).concat(j)).css({
                    "background": "#00AB6F",
                    "color": "#F9F6F2",
                    "font-size": "60px",
                })
                break;
            case 512:
                $("#".concat(i).concat(j)).css({
                    "background": "#DCBD89",
                    "color": "#F9F6F2",
                    "font-size": "60px",
                })
                break;
            case 1024:
                $("#".concat(i).concat(j)).css({
                    "background": "#80560F",
                    "color": "#F9F6F2",
                    "font-size": "45px",
                })
                break;
            case 2048:
                $("#".concat(i).concat(j)).css({
                    "background": "#FFCC40",
                    "color": "#F9F6F2",
                    "font-size": "45px",
                })
                break;
            default:
                $("#".concat(i).concat(j)).css({
                    "background": "#EECA8E",
                    "color": "#F9F6F2",
                    "font-size": "45px",
                    "height": "107",
                    "width": "107",
                })
        }
    }

    function checkLose() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (array[i][j] == 0) {
                    return false
                }
            }
        }
        for (let i = 1; i < 3; i++) {
            for (let j = 1; j < 3; j++) {
                if (array[i][j] == array[i][j + 1])
                    return false
                if (array[i][j] == array[i][j - 1])
                    return false
                if (array[i][j] == array[i + 1][j])
                    return false
                if (array[i][j] == array[i - 1][j])
                    return false
            }
        }

        return true;
    }

    function newRand() {
        let i = Math.floor((Math.random() * 4));
        let j = Math.floor((Math.random() * 4));
        if (array[i][j] == 0) {
            array[i][j] = randomNumber();
        } else {
            newRand()
        }

        refresh();

    }

    function downCheck() {
        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (array[i][j] == array[i - 1][j]) {
                    array[i][j] += array[i - 1][j];
                    array[i - 1][j] = 0;
                    score += array[i][j];
                }
            }
        }
    }

    function upCheck() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (array[i][j] == array[i + 1][j]) {
                    array[i][j] += array[i + 1][j];
                    array[i + 1][j] = 0;
                    score += array[i][j];
                }
            }
        }
    }

    function rightCheck() {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (array[i][j] == array[i][j - 1]) {
                    array[i][j] += array[i][j - 1];
                    array[i][j - 1] = 0;
                    score += array[i][j];
                }
            }
        }
    }

    function leftCheck() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (array[i][j] == array[i][j + 1]) {
                    array[i][j] += array[i][j + 1];
                    array[i][j + 1] = 0;
                    score += array[i][j];
                }
            }
        }
    }

    function upMove() {
        for (let r = 0; r < 4; r++)
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    if (array[i][j] == 0) {
                        array[i][j] = array[i + 1][j];
                        array[i + 1][j] = 0;
                    }
                }
            }
    }

    function downMove() {
        for (let r = 0; r < 4; r++)
            for (let i = 1; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (array[i][j] == 0) {
                        array[i][j] = array[i - 1][j];
                        array[i - 1][j] = 0;
                    }
                }
            }
    }

    function rightMove() {
        for (let r = 0; r < 4; r++)
            for (let i = 0; i < 4; i++) {
                for (let j = 1; j < 4; j++) {
                    if (array[i][j] == 0) {

                        array[i][j] = array[i][j - 1];
                        array[i][j - 1] = 0;
                    }
                }
            }
    }

    function leftMove() {
        for (let r = 0; r < 4; r++)
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    if (array[i][j] == 0) {
                        array[i][j] = array[i][j + 1];
                        array[i][j + 1] = 0;
                    }
                }
            }

    }

    $("#restart").on('click', function () {

        score = 0;
        array = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                $("#".concat(i).concat(j)).text(array[i - 1][j - 1]);
            }
        }
        newRand();

    })


    $(document).keydown(function (e) { //down
        if (e.which == 40) {
            createCopy();

            downMove();
            downCheck();
            downMove();

            if (checkdd())
                newRand();

            e.stopPropagation();
            e.preventDefault();
        }
    })

    $(document).keydown(function (e) { //left
        if (e.which == 37) {


            createCopy();
            leftMove();
            leftCheck();
            leftMove();

            if (checkdd())
                newRand();

        }
    })

    $(document).keydown(function (e) { //up
        if (e.which == 38) {
            createCopy();
            upMove();
            upCheck();
            upMove();

            if (checkdd())
                newRand();

            e.stopPropagation();
            e.preventDefault();
        }
    })

    $(document).keydown(function (e) { //right
        //let prevState = array;
        //console.log(prevState)
        //console.log(array)

        if (e.which == 39) {

            createCopy();

            rightMove();
            rightCheck();
            rightMove();

            //console.log(prevState)
            //console.log(array)

            if (checkdd())
                //if (prevState != array)
                newRand();
        }
    })


    let prevState = [[], [], [], []];

    function checkdd() {


        if (checkLose()) {
            swal({
                    title: "You lose",
                    text: "Score: " + score,
                    icon: "error",
                    closeOnConfirm: true,
                },
                function (isConfirm) {
                    if (isConfirm) {
                        array = []
                        $("#restart").click();
                        score = 0;
                    }
                }
            )
            return false
        }

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (prevState[i][j] !== array[i][j]) {
                    return true
                }
            }
        }
        return false
    }

    function createCopy() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                prevState[i][j] = array[i][j];
            }
        }
    }


})
;

