var checkBoxes = ["checkbox1", "checkbox2",
                  "checkbox3", "checkbox4",
                  "checkbox5", "checkbox6",
                  "checkbox7", "checkbox8",
                  "checkbox9", "checkbox10",
                  "checkbox11", "checkbox12"];

for (var i = 0; i < checkBoxes.length; i++) {
    document.getElementById(checkBoxes[i]).onclick = function() {
        var allChecked = true;
        for (var j = 0; j < checkBoxes.length; j++) {

            if (!document.getElementById(checkBoxes[j]).checked) {
                allChecked = false;
                break;
            }
        }
        if (allChecked) {
            alert("You have completed this checklist!");
        }
    };
}
