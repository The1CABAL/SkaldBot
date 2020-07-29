﻿CREATE TABLE [dbo].[CodeVueForms] (
    [FormKey]  NVARCHAR (255) NOT NULL,
    [FormName] NVARCHAR (255) NOT NULL,
    [PageId]   INT            CONSTRAINT [DF_CodeVueForms_PageId] DEFAULT ((1)) NOT NULL,
    [IsActive] BIT            CONSTRAINT [DF_CodeVueForms_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_CodeVueForms] PRIMARY KEY CLUSTERED ([FormKey] ASC)
);




