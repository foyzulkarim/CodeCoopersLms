
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 11/10/2017 20:04:45
-- Generated from EDMX file: C:\Github\CodeCoopersLms\Projects\Vt\DataAccess\VirtualTraineesModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [virtualtrainees];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Content_Level]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Content] DROP CONSTRAINT [FK_Content_Level];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentFile_File]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentFile] DROP CONSTRAINT [FK_ContentFile_File];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentHelpSite_Content]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentHelpSite] DROP CONSTRAINT [FK_ContentHelpSite_Content];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentHelpSite_HelpSite]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentHelpSite] DROP CONSTRAINT [FK_ContentHelpSite_HelpSite];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentProblem_Content]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentProblem] DROP CONSTRAINT [FK_ContentProblem_Content];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentProblem_Problem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentProblem] DROP CONSTRAINT [FK_ContentProblem_Problem];
GO
IF OBJECT_ID(N'[dbo].[FK_ContentVideo_Content]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ContentFile] DROP CONSTRAINT [FK_ContentVideo_Content];
GO
IF OBJECT_ID(N'[dbo].[FK_Option_Question]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Option] DROP CONSTRAINT [FK_Option_Question];
GO
IF OBJECT_ID(N'[dbo].[FK_Payment_Trainee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Payment] DROP CONSTRAINT [FK_Payment_Trainee];
GO
IF OBJECT_ID(N'[dbo].[FK_Quiz_Content]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Quiz] DROP CONSTRAINT [FK_Quiz_Content];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizQuestion_Question]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuizQuestion] DROP CONSTRAINT [FK_QuizQuestion_Question];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizQuestion_Quiz]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuizQuestion] DROP CONSTRAINT [FK_QuizQuestion_Quiz];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeHistory_Content]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeHistory] DROP CONSTRAINT [FK_TraineeHistory_Content];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeHistory_Trainee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeHistory] DROP CONSTRAINT [FK_TraineeHistory_Trainee];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeQuizAnswerHistory_Question]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeQuizAnswerHistory] DROP CONSTRAINT [FK_TraineeQuizAnswerHistory_Question];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeQuizAnswerHistory_Quiz]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeQuizAnswerHistory] DROP CONSTRAINT [FK_TraineeQuizAnswerHistory_Quiz];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeQuizAnswerHistory_Trainee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeQuizAnswerHistory] DROP CONSTRAINT [FK_TraineeQuizAnswerHistory_Trainee];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeQuizHistory_Content]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeQuizHistory] DROP CONSTRAINT [FK_TraineeQuizHistory_Content];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeQuizHistory_Quiz]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeQuizHistory] DROP CONSTRAINT [FK_TraineeQuizHistory_Quiz];
GO
IF OBJECT_ID(N'[dbo].[FK_TraineeQuizHistory_Trainee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TraineeQuizHistory] DROP CONSTRAINT [FK_TraineeQuizHistory_Trainee];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Content]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Content];
GO
IF OBJECT_ID(N'[dbo].[ContentFile]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentFile];
GO
IF OBJECT_ID(N'[dbo].[ContentHelpSite]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentHelpSite];
GO
IF OBJECT_ID(N'[dbo].[ContentProblem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContentProblem];
GO
IF OBJECT_ID(N'[dbo].[EmailBank]', 'U') IS NOT NULL
    DROP TABLE [dbo].[EmailBank];
GO
IF OBJECT_ID(N'[dbo].[File]', 'U') IS NOT NULL
    DROP TABLE [dbo].[File];
GO
IF OBJECT_ID(N'[dbo].[HelpSite]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HelpSite];
GO
IF OBJECT_ID(N'[dbo].[Level]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Level];
GO
IF OBJECT_ID(N'[dbo].[Option]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Option];
GO
IF OBJECT_ID(N'[dbo].[Payment]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Payment];
GO
IF OBJECT_ID(N'[dbo].[Problem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Problem];
GO
IF OBJECT_ID(N'[dbo].[Question]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Question];
GO
IF OBJECT_ID(N'[dbo].[Quiz]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Quiz];
GO
IF OBJECT_ID(N'[dbo].[QuizQuestion]', 'U') IS NOT NULL
    DROP TABLE [dbo].[QuizQuestion];
GO
IF OBJECT_ID(N'[dbo].[Trainee]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Trainee];
GO
IF OBJECT_ID(N'[dbo].[TraineeHistory]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TraineeHistory];
GO
IF OBJECT_ID(N'[dbo].[TraineeQuizAnswerHistory]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TraineeQuizAnswerHistory];
GO
IF OBJECT_ID(N'[dbo].[TraineeQuizHistory]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TraineeQuizHistory];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Contents'
CREATE TABLE [dbo].[Contents] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [Type] int  NOT NULL,
    [LevelId] uniqueidentifier  NOT NULL,
    [No] int  NOT NULL,
    [Point] int  NOT NULL,
    [Tags] varchar(50)  NOT NULL,
    [Created] datetime  NOT NULL,
    [Changed] datetime  NOT NULL,
    [IsPublic] bit  NOT NULL
);
GO

-- Creating table 'ContentFiles'
CREATE TABLE [dbo].[ContentFiles] (
    [Id] uniqueidentifier  NOT NULL,
    [ContentId] uniqueidentifier  NOT NULL,
    [FileId] uniqueidentifier  NOT NULL,
    [SerialNo] int  NOT NULL,
    [IsActive] bit  NOT NULL
);
GO

-- Creating table 'ContentHelpSites'
CREATE TABLE [dbo].[ContentHelpSites] (
    [Id] uniqueidentifier  NOT NULL,
    [ContentId] uniqueidentifier  NOT NULL,
    [HelpSiteId] uniqueidentifier  NOT NULL,
    [IsActive] bit  NOT NULL
);
GO

-- Creating table 'ContentProblems'
CREATE TABLE [dbo].[ContentProblems] (
    [Id] uniqueidentifier  NOT NULL,
    [ContentId] uniqueidentifier  NOT NULL,
    [ProblemId] uniqueidentifier  NOT NULL,
    [IsActive] bit  NOT NULL
);
GO

-- Creating table 'EmailBanks'
CREATE TABLE [dbo].[EmailBanks] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Email] varchar(50)  NOT NULL,
    [EntryAt] datetime  NOT NULL
);
GO

-- Creating table 'Files'
CREATE TABLE [dbo].[Files] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [Description] varchar(200)  NOT NULL,
    [SourceUrl] varchar(500)  NOT NULL,
    [Length] int  NOT NULL,
    [Size] int  NOT NULL,
    [TotalViews] int  NOT NULL,
    [Complexity] int  NOT NULL,
    [Tags] varchar(50)  NOT NULL,
    [Type] int  NOT NULL,
    [Created] datetime  NOT NULL,
    [Changed] datetime  NOT NULL
);
GO

-- Creating table 'HelpSites'
CREATE TABLE [dbo].[HelpSites] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [Url] varchar(500)  NOT NULL,
    [Tags] varchar(50)  NOT NULL,
    [Created] datetime  NOT NULL,
    [Changed] datetime  NOT NULL
);
GO

-- Creating table 'Levels'
CREATE TABLE [dbo].[Levels] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [Count] int  NOT NULL,
    [No] int  NOT NULL,
    [Created] datetime  NOT NULL,
    [Changed] datetime  NOT NULL
);
GO

-- Creating table 'Options'
CREATE TABLE [dbo].[Options] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [IsAnswer] bit  NOT NULL,
    [QuestionId] uniqueidentifier  NOT NULL
);
GO

-- Creating table 'Payments'
CREATE TABLE [dbo].[Payments] (
    [Id] uniqueidentifier  NOT NULL,
    [TraineeId] uniqueidentifier  NOT NULL,
    [PaidDate] datetimeoffset  NOT NULL,
    [Amount] float  NOT NULL,
    [Method] int  NOT NULL,
    [Note] varchar(50)  NOT NULL,
    [TransactionNumber] varchar(50)  NOT NULL,
    [IsVerified] bit  NOT NULL,
    [VerifiedAt] datetimeoffset  NOT NULL
);
GO

-- Creating table 'Problems'
CREATE TABLE [dbo].[Problems] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Description] varchar(200)  NOT NULL,
    [Type] int  NOT NULL,
    [Complexity] int  NOT NULL,
    [Point] int  NOT NULL,
    [TotalSubmission] int  NOT NULL,
    [Created] datetime  NOT NULL,
    [Changed] datetime  NOT NULL
);
GO

-- Creating table 'Questions'
CREATE TABLE [dbo].[Questions] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [Description] varchar(200)  NULL,
    [Created] datetime  NOT NULL,
    [Changed] datetime  NOT NULL,
    [Type] int  NOT NULL
);
GO

-- Creating table 'Quizs'
CREATE TABLE [dbo].[Quizs] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [ContentId] uniqueidentifier  NOT NULL,
    [Count] int  NOT NULL,
    [IsActive] bit  NOT NULL,
    [Created] datetime  NOT NULL,
    [Changed] datetime  NOT NULL
);
GO

-- Creating table 'QuizQuestions'
CREATE TABLE [dbo].[QuizQuestions] (
    [Id] uniqueidentifier  NOT NULL,
    [QuizId] uniqueidentifier  NOT NULL,
    [QuestionId] uniqueidentifier  NOT NULL,
    [SerialNo] int  NOT NULL,
    [IsActive] bit  NOT NULL
);
GO

-- Creating table 'Trainees'
CREATE TABLE [dbo].[Trainees] (
    [Id] uniqueidentifier  NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Email] varchar(50)  NOT NULL,
    [Password] varchar(50)  NOT NULL,
    [Phone] varchar(50)  NOT NULL,
    [IsActive] bit  NOT NULL,
    [Point] int  NOT NULL,
    [Joined] datetime  NOT NULL,
    [Expired] datetime  NOT NULL,
    [Changed] datetime  NOT NULL,
    [Token] varchar(100)  NOT NULL
);
GO

-- Creating table 'TraineeHistories'
CREATE TABLE [dbo].[TraineeHistories] (
    [Id] uniqueidentifier  NOT NULL,
    [TraineeId] uniqueidentifier  NOT NULL,
    [ContentId] uniqueidentifier  NOT NULL,
    [Unlocked] datetime  NOT NULL,
    [LastAccessed] datetime  NOT NULL,
    [Point] int  NOT NULL
);
GO

-- Creating table 'TraineeQuizAnswerHistories'
CREATE TABLE [dbo].[TraineeQuizAnswerHistories] (
    [Id] uniqueidentifier  NOT NULL,
    [TraineeId] uniqueidentifier  NOT NULL,
    [QuizHistoryId] uniqueidentifier  NOT NULL,
    [QuestionId] uniqueidentifier  NOT NULL,
    [Answer] varchar(200)  NOT NULL,
    [IsVerified] bit  NOT NULL,
    [IsCorrect] bit  NOT NULL,
    [AnswerDate] datetime  NOT NULL
);
GO

-- Creating table 'TraineeQuizHistories'
CREATE TABLE [dbo].[TraineeQuizHistories] (
    [Id] uniqueidentifier  NOT NULL,
    [TraineeId] uniqueidentifier  NOT NULL,
    [ContentId] uniqueidentifier  NOT NULL,
    [QuizId] uniqueidentifier  NOT NULL,
    [Appeared] datetime  NOT NULL,
    [LastAccessed] datetime  NOT NULL,
    [IsCompleted] bit  NOT NULL,
    [CorrectAnswer] int  NOT NULL,
    [Point] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Contents'
ALTER TABLE [dbo].[Contents]
ADD CONSTRAINT [PK_Contents]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ContentFiles'
ALTER TABLE [dbo].[ContentFiles]
ADD CONSTRAINT [PK_ContentFiles]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ContentHelpSites'
ALTER TABLE [dbo].[ContentHelpSites]
ADD CONSTRAINT [PK_ContentHelpSites]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ContentProblems'
ALTER TABLE [dbo].[ContentProblems]
ADD CONSTRAINT [PK_ContentProblems]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'EmailBanks'
ALTER TABLE [dbo].[EmailBanks]
ADD CONSTRAINT [PK_EmailBanks]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Files'
ALTER TABLE [dbo].[Files]
ADD CONSTRAINT [PK_Files]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'HelpSites'
ALTER TABLE [dbo].[HelpSites]
ADD CONSTRAINT [PK_HelpSites]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Levels'
ALTER TABLE [dbo].[Levels]
ADD CONSTRAINT [PK_Levels]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Options'
ALTER TABLE [dbo].[Options]
ADD CONSTRAINT [PK_Options]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Payments'
ALTER TABLE [dbo].[Payments]
ADD CONSTRAINT [PK_Payments]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Problems'
ALTER TABLE [dbo].[Problems]
ADD CONSTRAINT [PK_Problems]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [PK_Questions]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Quizs'
ALTER TABLE [dbo].[Quizs]
ADD CONSTRAINT [PK_Quizs]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'QuizQuestions'
ALTER TABLE [dbo].[QuizQuestions]
ADD CONSTRAINT [PK_QuizQuestions]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Trainees'
ALTER TABLE [dbo].[Trainees]
ADD CONSTRAINT [PK_Trainees]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TraineeHistories'
ALTER TABLE [dbo].[TraineeHistories]
ADD CONSTRAINT [PK_TraineeHistories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TraineeQuizAnswerHistories'
ALTER TABLE [dbo].[TraineeQuizAnswerHistories]
ADD CONSTRAINT [PK_TraineeQuizAnswerHistories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TraineeQuizHistories'
ALTER TABLE [dbo].[TraineeQuizHistories]
ADD CONSTRAINT [PK_TraineeQuizHistories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [LevelId] in table 'Contents'
ALTER TABLE [dbo].[Contents]
ADD CONSTRAINT [FK_Content_Level]
    FOREIGN KEY ([LevelId])
    REFERENCES [dbo].[Levels]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Content_Level'
CREATE INDEX [IX_FK_Content_Level]
ON [dbo].[Contents]
    ([LevelId]);
GO

-- Creating foreign key on [ContentId] in table 'ContentHelpSites'
ALTER TABLE [dbo].[ContentHelpSites]
ADD CONSTRAINT [FK_ContentHelpSite_Content]
    FOREIGN KEY ([ContentId])
    REFERENCES [dbo].[Contents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentHelpSite_Content'
CREATE INDEX [IX_FK_ContentHelpSite_Content]
ON [dbo].[ContentHelpSites]
    ([ContentId]);
GO

-- Creating foreign key on [ContentId] in table 'ContentProblems'
ALTER TABLE [dbo].[ContentProblems]
ADD CONSTRAINT [FK_ContentProblem_Content]
    FOREIGN KEY ([ContentId])
    REFERENCES [dbo].[Contents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentProblem_Content'
CREATE INDEX [IX_FK_ContentProblem_Content]
ON [dbo].[ContentProblems]
    ([ContentId]);
GO

-- Creating foreign key on [ContentId] in table 'ContentFiles'
ALTER TABLE [dbo].[ContentFiles]
ADD CONSTRAINT [FK_ContentVideo_Content]
    FOREIGN KEY ([ContentId])
    REFERENCES [dbo].[Contents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentVideo_Content'
CREATE INDEX [IX_FK_ContentVideo_Content]
ON [dbo].[ContentFiles]
    ([ContentId]);
GO

-- Creating foreign key on [ContentId] in table 'Quizs'
ALTER TABLE [dbo].[Quizs]
ADD CONSTRAINT [FK_Quiz_Content]
    FOREIGN KEY ([ContentId])
    REFERENCES [dbo].[Contents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Quiz_Content'
CREATE INDEX [IX_FK_Quiz_Content]
ON [dbo].[Quizs]
    ([ContentId]);
GO

-- Creating foreign key on [ContentId] in table 'TraineeHistories'
ALTER TABLE [dbo].[TraineeHistories]
ADD CONSTRAINT [FK_TraineeHistory_Content]
    FOREIGN KEY ([ContentId])
    REFERENCES [dbo].[Contents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeHistory_Content'
CREATE INDEX [IX_FK_TraineeHistory_Content]
ON [dbo].[TraineeHistories]
    ([ContentId]);
GO

-- Creating foreign key on [ContentId] in table 'TraineeQuizHistories'
ALTER TABLE [dbo].[TraineeQuizHistories]
ADD CONSTRAINT [FK_TraineeQuizHistory_Content]
    FOREIGN KEY ([ContentId])
    REFERENCES [dbo].[Contents]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeQuizHistory_Content'
CREATE INDEX [IX_FK_TraineeQuizHistory_Content]
ON [dbo].[TraineeQuizHistories]
    ([ContentId]);
GO

-- Creating foreign key on [FileId] in table 'ContentFiles'
ALTER TABLE [dbo].[ContentFiles]
ADD CONSTRAINT [FK_ContentFile_File]
    FOREIGN KEY ([FileId])
    REFERENCES [dbo].[Files]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentFile_File'
CREATE INDEX [IX_FK_ContentFile_File]
ON [dbo].[ContentFiles]
    ([FileId]);
GO

-- Creating foreign key on [HelpSiteId] in table 'ContentHelpSites'
ALTER TABLE [dbo].[ContentHelpSites]
ADD CONSTRAINT [FK_ContentHelpSite_HelpSite]
    FOREIGN KEY ([HelpSiteId])
    REFERENCES [dbo].[HelpSites]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentHelpSite_HelpSite'
CREATE INDEX [IX_FK_ContentHelpSite_HelpSite]
ON [dbo].[ContentHelpSites]
    ([HelpSiteId]);
GO

-- Creating foreign key on [ProblemId] in table 'ContentProblems'
ALTER TABLE [dbo].[ContentProblems]
ADD CONSTRAINT [FK_ContentProblem_Problem]
    FOREIGN KEY ([ProblemId])
    REFERENCES [dbo].[Problems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ContentProblem_Problem'
CREATE INDEX [IX_FK_ContentProblem_Problem]
ON [dbo].[ContentProblems]
    ([ProblemId]);
GO

-- Creating foreign key on [QuestionId] in table 'Options'
ALTER TABLE [dbo].[Options]
ADD CONSTRAINT [FK_Option_Question]
    FOREIGN KEY ([QuestionId])
    REFERENCES [dbo].[Questions]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Option_Question'
CREATE INDEX [IX_FK_Option_Question]
ON [dbo].[Options]
    ([QuestionId]);
GO

-- Creating foreign key on [TraineeId] in table 'Payments'
ALTER TABLE [dbo].[Payments]
ADD CONSTRAINT [FK_Payment_Trainee]
    FOREIGN KEY ([TraineeId])
    REFERENCES [dbo].[Trainees]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Payment_Trainee'
CREATE INDEX [IX_FK_Payment_Trainee]
ON [dbo].[Payments]
    ([TraineeId]);
GO

-- Creating foreign key on [QuestionId] in table 'QuizQuestions'
ALTER TABLE [dbo].[QuizQuestions]
ADD CONSTRAINT [FK_QuizQuestion_Question]
    FOREIGN KEY ([QuestionId])
    REFERENCES [dbo].[Questions]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuizQuestion_Question'
CREATE INDEX [IX_FK_QuizQuestion_Question]
ON [dbo].[QuizQuestions]
    ([QuestionId]);
GO

-- Creating foreign key on [QuestionId] in table 'TraineeQuizAnswerHistories'
ALTER TABLE [dbo].[TraineeQuizAnswerHistories]
ADD CONSTRAINT [FK_TraineeQuizAnswerHistory_Question]
    FOREIGN KEY ([QuestionId])
    REFERENCES [dbo].[Questions]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeQuizAnswerHistory_Question'
CREATE INDEX [IX_FK_TraineeQuizAnswerHistory_Question]
ON [dbo].[TraineeQuizAnswerHistories]
    ([QuestionId]);
GO

-- Creating foreign key on [QuizId] in table 'QuizQuestions'
ALTER TABLE [dbo].[QuizQuestions]
ADD CONSTRAINT [FK_QuizQuestion_Quiz]
    FOREIGN KEY ([QuizId])
    REFERENCES [dbo].[Quizs]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuizQuestion_Quiz'
CREATE INDEX [IX_FK_QuizQuestion_Quiz]
ON [dbo].[QuizQuestions]
    ([QuizId]);
GO

-- Creating foreign key on [QuizId] in table 'TraineeQuizHistories'
ALTER TABLE [dbo].[TraineeQuizHistories]
ADD CONSTRAINT [FK_TraineeQuizHistory_Quiz]
    FOREIGN KEY ([QuizId])
    REFERENCES [dbo].[Quizs]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeQuizHistory_Quiz'
CREATE INDEX [IX_FK_TraineeQuizHistory_Quiz]
ON [dbo].[TraineeQuizHistories]
    ([QuizId]);
GO

-- Creating foreign key on [TraineeId] in table 'TraineeHistories'
ALTER TABLE [dbo].[TraineeHistories]
ADD CONSTRAINT [FK_TraineeHistory_Trainee]
    FOREIGN KEY ([TraineeId])
    REFERENCES [dbo].[Trainees]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeHistory_Trainee'
CREATE INDEX [IX_FK_TraineeHistory_Trainee]
ON [dbo].[TraineeHistories]
    ([TraineeId]);
GO

-- Creating foreign key on [TraineeId] in table 'TraineeQuizAnswerHistories'
ALTER TABLE [dbo].[TraineeQuizAnswerHistories]
ADD CONSTRAINT [FK_TraineeQuizAnswerHistory_Trainee]
    FOREIGN KEY ([TraineeId])
    REFERENCES [dbo].[Trainees]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeQuizAnswerHistory_Trainee'
CREATE INDEX [IX_FK_TraineeQuizAnswerHistory_Trainee]
ON [dbo].[TraineeQuizAnswerHistories]
    ([TraineeId]);
GO

-- Creating foreign key on [TraineeId] in table 'TraineeQuizHistories'
ALTER TABLE [dbo].[TraineeQuizHistories]
ADD CONSTRAINT [FK_TraineeQuizHistory_Trainee]
    FOREIGN KEY ([TraineeId])
    REFERENCES [dbo].[Trainees]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeQuizHistory_Trainee'
CREATE INDEX [IX_FK_TraineeQuizHistory_Trainee]
ON [dbo].[TraineeQuizHistories]
    ([TraineeId]);
GO

-- Creating foreign key on [QuizHistoryId] in table 'TraineeQuizAnswerHistories'
ALTER TABLE [dbo].[TraineeQuizAnswerHistories]
ADD CONSTRAINT [FK_TraineeQuizAnswerHistory_Quiz]
    FOREIGN KEY ([QuizHistoryId])
    REFERENCES [dbo].[TraineeQuizHistories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TraineeQuizAnswerHistory_Quiz'
CREATE INDEX [IX_FK_TraineeQuizAnswerHistory_Quiz]
ON [dbo].[TraineeQuizAnswerHistories]
    ([QuizHistoryId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------