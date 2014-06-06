OptimizationKillers
===================

NodeJS Anti-Patterns
Inspired by the [Optimization Killers wiki](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers) from [bluebird](https://github.com/petkaantonov/bluebird/).


How to run:
```
$ node --trace_opt --trace_deopt --allow-natives-syntax killers.js
[deoptimize context: 250372f14679]
[marking IN 0x32ee9b0ab70 for recompilation, reason: small function, ICs with typeinfo: 1/2 (50%)]
[disabled optimization for IN, reason: call to a JavaScript runtime function]
try catch is not optimized

try finally is not optimized

[disabled optimization for a, reason: Object literal with complex property]
__proto__ is not optimized

[optimizing: b / 250372fef399 - took 0.049, 0.149, 0.000 ms]
Reassigning parameter is optimized

[optimizing: b / 250372ff0061 - took 0.024, 0.054, 0.000 ms]
Workaround ReAssign Param is optimized

[optimizing: a / 250372ff0d29 - took 0.043, 0.058, 0.000 ms]
Workaround ReAssign Param 2 is optimized

[disabled optimization for , reason: bad value context for arguments value]
Leak arguments is not optimized

[disabled optimization for a, reason: bad value context for arguments value]
Leak arguments 2 is not optimized

[disabled optimization for , reason: bad value context for arguments value]
Leak arguments 3 is not optimized

[optimizing: obj / 250372ff4469 - took 0.406, 0.138, 0.000 ms]
Workaround Doesnt Leak Arguments is optimized

[disabled optimization for obj, reason: SwitchStatement: too many clauses]
Over 128 cases is not optimized

[disabled optimization for hashTable.-, reason: ForInStatement with non-local each variable]
nonLocalKey is not optimized

[disabled optimization for hashTable.a, reason: ForInStatement is not fast case]
hashTableIteration "-" as key is not optimized

[optimizing: arr / 250372ffb0b9 - took 0.052, 0.164, 0.000 ms]
Workaround hashTableIteration object is optimized

[disabled optimization for , reason: ForInStatement is not fast case]
iteratesOverArray is not optimized
```
