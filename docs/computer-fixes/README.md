# :bug: Computer Issues and Fixes

## YES DC Text on Steam Games and Applications

:link: [NO DC / YES DC??? Mysterious Text That Suddenly Appeared At The Top Left Corner Of Some Applications](https://www.reddit.com/r/techsupport/comments/lr31f2/no_dc_yes_dc_mysterious_text_that_suddenly/)

1. Navigate to `C:\ProgramData\NVIDIA Corporation\Drs` and deleting the file named *nvdrssel.bin*

## Make Windows 10 Home Accept Long File Paths

:link: [How To Fix ‘Filename Is Too Long’ Issue In Windows](https://helpdeskgeek.com/how-to/how-to-fix-filename-is-too-long-issue-in-windows/)

1. `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem` and find the key *LongPathsEnabled*.
2. Double-click on *LongPathsEnabled*. In the *Value data*: field, make sure the number *1* is in there. Click OK to commit.
