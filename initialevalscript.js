function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // VARIABLES

    var verticalposition = 10;
    

    //SUBJECTIVE VARIABLES
    var subpain = document.getElementById('painscale').value;
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


    if (hasUserInput(subtext)) {
        doc.setFont("courier", "bold");
        doc.setFontSize(22);
        doc.text("Subjective: ", 20, verticalposition);
        verticalposition += 8;
        doc.setFontSize(16);
        doc.setFont("courier", "normal");
        doc.text(subtext, 20, verticalposition, { maxWidth: 150 });
        verticalposition += 100;
    }

   if (hasUserInput(subpain)) {
        doc.setFont("courier", "bold");
        doc.text("Pain: ", 20, verticalposition);
        var pwidth = doc.getTextWidth('Pain: ');
        doc.setFont("courier", "normal");
        doc.text(subpain, pwidth + 20, verticalposition);
        verticalposition += 10;
    }
    

    if (hasUserInput(subloc)) {
        doc.setFont("courier", "bold");
        doc.text("Location: ", 20, verticalposition);
        var locwidth = doc.getTextWidth('Location: ');
        doc.setFont("courier", "normal");
        doc.text(subloc, locwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subons)) {
        doc.setFont("courier", "bold");
        doc.text("Onset: ", 20, verticalposition);
        var onswidth = doc.getTextWidth('Onset: ');
        doc.setFont("courier", "normal");
        doc.text(subons, onswidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(submoi)) {
        doc.setFont("courier", "bold");
        doc.text("Mecahnism of Injury: ", 20, verticalposition);
        var moiwidth = doc.getTextWidth('Mechanism of Injury: ');
        doc.setFont("courier", "normal");
        doc.text(submoi, moiwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subagg)) {
        doc.setFont("courier", "bold");
        doc.text("Aggravating Factors: ", 20, verticalposition);
        var aggwidth = doc.getTextWidth('Aggravating Factors: ');
        doc.setFont("courier", "normal");
        doc.text(subagg, aggwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subeas)) {
        doc.setFont("courier", "bold");
        doc.text("Easing Factors: ", 20, verticalposition);
        var easwidth = doc.getTextWidth('Easing Factors: ');
        doc.setFont("courier", "normal");
        doc.text(subeas, easwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subimg)) {
        doc.setFont("courier", "bold");
        doc.text("Imaging: ", 20, verticalposition);
        var imgwidth = doc.getTextWidth('Imaging: ');
        doc.setFont("courier", "normal");
        doc.text(subimg, imgwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subhob)) {
        doc.setFont("courier", "bold");
        doc.text("Hobbies: ", 20, verticalposition);
        var hobwidth = doc.getTextWidth('Hobbies: ');
        doc.setFont("courier", "normal");
        doc.text(subhob, hobwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subocc)) {
        doc.setFont("courier", "bold");
        doc.text("Occupation: ", 20, verticalposition);
        var occwidth = doc.getTextWidth('Occupation: ');
        doc.setFont("courier", "normal");
        doc.text(subocc, occwidth + 20, verticalposition);
        verticalposition += 10;
    }

   

    
    
    //OBJ STYLE
doc.addPage();

var verticalposition = 10;

    doc.text("Observation: " + shoulderobservation, 20, verticalposition);
    verticalposition += 10;

    doc.text("L shoulder flexion MMT: " + lshouldermmtflex + lshouldermmtplusminusflex + "/5", 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder extension MMT: " + lshouldermmtext + lshouldermmtplusminusext + "/5", 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder abduction MMT: " + lshouldermmtabd + lshouldermmtplusminusabd + "/5", 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder external rotation MMT: " + lshouldermmter + lshouldermmtplusminuser + "/5", 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder internal rotation MMT: " + lshouldermmtir + lshouldermmtplusminusir + "/5", 20, verticalposition);
    verticalposition += 10;

    doc.text("L shoulder flexion AROM: " + lshoulderaromflex, 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder extension AROM: " + lshoulderaromext, 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder abduction AROM: " + lshoulderaromabd, 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder external rotation AROM: " + lshoulderaromer, 20, verticalposition);
    verticalposition += 10;
    
    doc.text("L shoulder internal rotation AROM: " + lshoulderaromir, 20, verticalposition);
    verticalposition += 10;


    doc.save("pteval.pdf")

} 