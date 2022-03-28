const purity = {
    normTemp:37,
    minTemp:20,
    maxTemp:40
}
if(purity.normTemp>=minTemp && purity.normTemp<normTemp){
    console.log('normal temperature, youre goood!')
}
else if(purity.normTemp<= normTemp && purity.normTemp>=maxTemp){
    console.log('Above normal, please visit any healthcenter nearby for checkup!')
}
else if(purity.normTemp>maxTemp){
    console.log('Emergency!!!!!! Go to the hospital ASAP')
}
else{
    console.log('Youre coldblooded')
}