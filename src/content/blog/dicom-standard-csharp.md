---
title: "DICOM : Le Standard Incontournable de l'Imagerie Médicale"
description: "DICOM est le standard universel pour la transmission, le stockage et l'affichage d'images médicales. Découverte du format, de sa structure et de son utilisation en C# avec fo-dicom."
date: 2025-12-19
category: medical
tags: [medical, DICOM, imagerie-médicale, csharp, fo-dicom]
layout: ../../layouts/BlogPost.astro
---

## Qu'est-ce que DICOM ?

**DICOM** (Digital Imaging and Communications in Medicine) est le standard universel pour la transmission, le stockage et l'affichage d'images médicales. Créé dans les années 1980, il est aujourd'hui utilisé par tous les équipements d'imagerie médicale : scanners, IRM, radiographies, échographies, et bien plus encore.

---

## Pourquoi DICOM est-il si important ?

DICOM standardise :

- **Le format des images** : métadonnées patient, paramètres d'acquisition, pixels de l'image
- **La communication** : protocoles réseau entre équipements (DICOM C-STORE, C-FIND, C-MOVE)
- **Le stockage** : serveurs PACS (Picture Archiving and Communication System)

---

## Structure d'un fichier DICOM

Un fichier DICOM n'est pas qu'une simple image : c'est un **conteneur structuré** contenant des centaines d'informations.

```
Informations Patient :
├── Patient Name: "DUPONT^JEAN"
├── Patient ID: "123456789"
├── Patient Birth Date: "19850315"
└── Patient Sex: "M"

Informations Étude :
├── Study Instance UID: "1.2.840.113619.2.55.3.12345678"
├── Study Date: "20240115"
├── Study Time: "143022"
├── Study Description: "SCANNER THORAX"
└── Accession Number: "ACC001234"

Informations Série :
├── Series Instance UID: "1.2.840.113619.2.55.3.98765432"
├── Series Number: "1"
├── Modality: "CT" (Scanner)
└── Series Description: "THORAX SANS INJECTION"

Informations Image :
├── SOP Instance UID: "1.2.840.113619.2.55.3.11111111"
├── Instance Number: "1"
├── Image Position: [0, 0, 100]
├── Pixel Spacing: [0.5, 0.5]
└── Slice Thickness: "2.5"
```

Chaque information est identifiée par un **tag** (ex: `(0010,0010)` pour le nom du patient) et peut être de différents types : texte, nombre, séquence, pixels bruts...

---

## DICOM en C# : la bibliothèque fo-dicom

Pour travailler avec DICOM en .NET, **fo-dicom** (Fellow Oak DICOM) est la référence incontournable. Cette bibliothèque open-source offre une API moderne et puissante.

### Installation

```bash
dotnet add package fo-dicom
```

### Lire un fichier DICOM

```csharp
using FellowOakDicom;

var file = await DicomFile.OpenAsync("path/to/file.dcm");
var dataset = file.Dataset;

var patientName = dataset.GetString(DicomTag.PatientName);
var studyDate = dataset.GetString(DicomTag.StudyDate);
var modality = dataset.GetString(DicomTag.Modality);

Console.WriteLine($"Patient: {patientName}");
Console.WriteLine($"Date: {studyDate}");
Console.WriteLine($"Modalité: {modality}");
```

### Créer un fichier DICOM

```csharp
var dataset = new DicomDataset
{
    { DicomTag.PatientName, "DUPONT^JEAN" },
    { DicomTag.PatientID, "123456789" },
    { DicomTag.Modality, "CT" },
    { DicomTag.StudyDescription, "SCANNER THORAX" }
};

var file = new DicomFile(dataset);
await file.SaveAsync("output.dcm");
```

### Requêtes réseau (C-FIND)

```csharp
using FellowOakDicom.Network;
using FellowOakDicom.Network.Client;

var client = DicomClientFactory.Create("localhost", 104, false, "SCU", "SCP");

var request = new DicomCFindRequest(DicomQueryRetrieveLevel.Study)
{
    Dataset = new DicomDataset
    {
        { DicomTag.PatientName, "DUPONT*" },
        { DicomTag.StudyDate, "20240115" }
    }
};

request.OnResponseReceived += (req, response) =>
{
    if (response.Dataset != null)
    {
        Console.WriteLine(response.Dataset.GetString(DicomTag.StudyDescription));
    }
};

await client.AddRequestAsync(request);
await client.SendAsync();
```

---

## En résumé

DICOM est bien plus qu'un format d'image. C'est un écosystème complet pour l'imagerie médicale : format de fichier, protocole réseau, et standard d'interopérabilité. Avec fo-dicom, son utilisation en C# est accessible et bien documentée.
