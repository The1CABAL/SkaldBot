﻿IF NOT EXISTS(SELECT 1 FROM Users WHERE Id = '2F5FA286-5644-4AB1-B04F-D2ED451EF33F')
BEGIN
	INSERT INTO Users (Id, AccountId, Username, FirstName, LastName, PasswordHash, IsActive, CreateDate)
	VALUES ('2F5FA286-5644-4AB1-B04F-D2ED451EF33F', 1, 'admin', 'SkaldBot', 'Admin', 'gAAAAABfF2cuGBdBsRqf91ppnfPQB-Sp-vN06Ff4X3niOiUOom6rI1RJIDkQVohKfyftpN_mzSTIjyCSLtJsTQPQjKtHFl2bjQ==', 1, GETDATE())
END

IF NOT EXISTS(SELECT 1 FROM UserRoles WHERE UserId = '2F5FA286-5644-4AB1-B04F-D2ED451EF33F')
BEGIN
	INSERT INTO UserRoles (UserId, RoleId)
	VALUES ('2F5FA286-5644-4AB1-B04F-D2ED451EF33F', 1)
END