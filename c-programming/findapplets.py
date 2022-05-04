#!/usr/bin/python3
import sys
import re

APPLET_FILES = {"sorters":"sorters.js"}

def fixFile(filename):
    f = open(filename)
    lines = f.readlines()
    f.close()

    appletSet = set()

    # replace the lines in the .html
    for i in range(len(lines)):
        while "ADAMSAPPLET" in lines[i]:
            appletName = re.search(r"data-program=\"(.*?)\"", lines[i]).group(1)
            appletSet.add(appletName)
            lines[i] = re.sub(r"ADAMSAPPLET(.*?)ENDADAMSAPPLET", r"<div\1></div>", lines[i])

    # if we never found the string ADAMSAPPLET, just leave without changing file
    if len(appletSet) == 0: return 0
            
    # add the proper script link to the header
    #<script src="sorters.js"></script>
    for i in range(len(lines)):
        if "<head>" in lines[i] or "<head " in lines[i]:
            for applet in appletSet: lines[i] += '<script src="' + APPLET_FILES[applet] + '"></script>\n'
            
    # write out
    with open(filename, 'w') as f:
        #for line in lines: f.write("%s\n" % item)
        f.writelines(lines)
    return len(appletSet)

for arg in sys.argv[1:]:
    numAdded =  fixFile(arg)
    if (numAdded): print("added " +str(numAdded)+ " applets to " +arg)
