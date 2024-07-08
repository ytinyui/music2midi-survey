import numpy as np
import json
def foo(i):
    return [f"audio/demo{i}-music2midi.mp3",f"audio/demo{i}-pop2piano.mp3",f"audio/demo{i}-picogen.mp3"]
ret = []
for i in range(1,11):
    ls = np.random.choice(foo(i),size=3,replace=False).tolist()
    ret.append([f"audio/demo{i}.mp3"]+ls)
    
with open("file_names.json","w") as f:
    json.dump(ret,f,indent=2)