﻿CREATE TABLE [dbo].[CodeServers] (
    [Id]         INT            IDENTITY (1, 1) NOT NULL,
    [ServerId]   NVARCHAR (255) NOT NULL,
    [ClientId]   BIGINT         NULL,
    [UpdateDate] DATETIME       CONSTRAINT [DF_CodeServers_UpdateDate] DEFAULT (getdate()) NULL,
    CONSTRAINT [PK_CodeServers] PRIMARY KEY CLUSTERED ([Id] ASC)
);

