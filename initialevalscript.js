function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // VARIABLES

    var verticalposition = 10;
    

    //SUBJECTIVE VARIABLES
    var subloc = document.getElementById('location').value;
    var subons = document.getElementById('onset').value;
    var submoi = document.getElementById('moi').value;
    var subagg = document.getElementById('aggfac').value;
    var subeas = document.getElementById('easefac').value;
    var subimg = document.getElementById('imaging').value;
    var subhob = document.getElementById('hobbies').value;
    var subocc = document.getElementById('occupation').value;
    var subtext = document.getElementById('subjectivetext').value;

    //OBJECTIVE VARIABLES




    //SHOULDER VARIABLEs
    var shoulderobservation = document.getElementById('shoulderobservation').value;
    var lshouldermmtflex = document.getElementById('lshouldermmtflex').value;
    var lshouldermmtplusminusflex = document.getElementById('lshouldermmtplusminusflex').value;
    var lshouldermmtext = document.getElementById('lshouldermmtext').value;
    var lshouldermmtplusminusext = document.getElementById('lshouldermmtplusminusext').value;
    var lshouldermmtabd = document.getElementById('lshouldermmtabd').value;
    var lshouldermmtplusminusabd = document.getElementById('lshouldermmtplusminusabd').value;
    var lshouldermmter = document.getElementById('lshouldermmter').value;
    var lshouldermmtplusminuser = document.getElementById('lshouldermmtplusminuser').value;
    var lshouldermmtir = document.getElementById('lshouldermmtir').value;
    var lshouldermmtplusminusir = document.getElementById('lshouldermmtplusminusir').value;

    var lshoulderaromflex = document.getElementById('lshoulderaromflex').value;
    var lshoulderaromext = document.getElementById('lshoulderaromext').value;
    var lshoulderaromabd = document.getElementById('lshoulderaromabd').value;
    var lshoulderaromer = document.getElementById('lshoulderaromer').value;
    var lshoulderaromir = document.getElementById('lshoulderaromir').value;

    var lshoulderpromflex = document.getElementById('lshoulderpromflex').value;
    var lshoulderpromext = document.getElementById('lshoulderpromext').value;
    var lshoulderpromabd = document.getElementById('lshoulderpromabd').value;
    var lshoulderpromer = document.getElementById('lshoulderpromer').value;
    var lshoulderpromir = document.getElementById('lshoulderpromir').value;



    var tableData = [
        ["Location", subloc],
        ["Onset", subons],
        ["Mechanism of Injury", submoi],
        ["Aggravating Factors", subagg],
        ["Easing Factors", subeas],
        ["Imaging", subimg],
        ["Hobbies", subhob],
        ["Occupation", subocc]
    ];

    //ASSESSMENT VARIABLES



    //PLAN VARIABLES


    //styling

    //print functions

    //SUB PRINT


    function hasUserInput(value) {
        return value.trim() !== '';
    }

    if (hasUserInput(subloc)) {
        doc.setFont("courier", "bold");
        doc.text("Location: ", 20, verticalposition);
        doc.setFont("courier", "normal");
        doc.text(subloc, 55, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subons)) {
        doc.setFont("courier", "bold");
        doc.text("Onset: ", 20, verticalposition);
        doc.setFont("courier", "normal");
        doc.text(subons, 45, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(submoi)) {
        doc.setFont("courier", "bold");
        doc.text("Mecahnism of Injury: ", 20, verticalposition);
        doc.setFont("courier", "normal");
        doc.text(submoi, 100, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subagg)) {
        doc.text("Aggravating Factors: " + subagg, 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subeas)) {
        doc.text("Easing Factors: " + subeas, 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subimg)) {
        doc.text("Imaging: " + subimg, 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subhob)) {
        doc.text("Hobbies: " + subhob, 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subocc)) {
        doc.text("Occupation: " + subocc, 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subtext)) {
        doc.text(subtext, 20, verticalposition);
        verticalposition += 10;
    }

    //OBJ STYLE



    doc.text("Observation: " + shoulderobservation, 20, 120);
    doc.text("L shoulder flexion MMT: " + lshouldermmtflex + lshouldermmtplusminusflex + "/5", 20, 130);
    doc.text("L shoulder extension MMT: " + lshouldermmtext + lshouldermmtplusminusext + "/5", 20, 140);
    doc.text("L shoulder abduction MMT: " + lshouldermmtabd + lshouldermmtplusminusabd + "/5", 20, 150);
    doc.text("L shoulder external rotation MMT: " + lshouldermmter + lshouldermmtplusminuser + "/5", 20, 160);
    doc.text("L shoulder internal rotation MMT: " + lshouldermmtir + lshouldermmtplusminusir + "/5", 20, 170);

    doc.text("L shoulder flexion AROM: " + lshoulderaromflex, 20, 180);
    doc.text("L shoulder extension AROM: " + lshoulderaromext, 20, 190);
    doc.text("L shoulder abduction AROM: " + lshoulderaromabd, 20, 200);
    doc.text("L shoulder external rotation AROM: " + lshoulderaromer, 20, 210);
    doc.text("L shoulder internal rotation AROM: " + lshoulderaromir, 20, 220);


    doc.save("pteval.pdf")

} 