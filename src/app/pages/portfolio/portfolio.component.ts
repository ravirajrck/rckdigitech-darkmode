import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioData: any[] = [];
  isLoading: boolean = true;
  activeFilter: string = 'all';
  
  // Modal State
  isModalOpen: boolean = false;
  modalImageUrl: string = '';

  private apiKey = "AIzaSyCtV5WhLC7r4Ov37jignSVB5EThBDsA-pg";
  private parentFolderId = "1N24qAVG3XnCEzokxcuhPvbpzclHDCbO_";

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.buildImageData();
  }

  async fetchLevel2Folders() {
    try {
      const query = encodeURIComponent(`'${this.parentFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed = false`);
      const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name)&key=${this.apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      return data.files || [];
    } catch (error) {
      console.error("Error fetching Level 2 folders:", error);
      return [];
    }
  }

  async fetchLevel3Folders(level2FolderId: string) {
    try {
      const query = encodeURIComponent(`'${level2FolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed = false`);
      const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name)&key=${this.apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      return data.files || [];
    } catch (error) {
      console.error("Error fetching Level 3 folders:", error);
      return [];
    }
  }

async listFiles(folderId: string) {
    try {
      const query = encodeURIComponent(`'${folderId}' in parents and mimeType contains 'image/' and trashed = false`);
      const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name)&key=${this.apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      const files = data.files || [];

      return files.map((file: any) => ({
        alt: file.name,
        // Ye format Google Drive ki images ko bina kisi corruption ke direct load karta hai
        url: `https://lh3.googleusercontent.com/d/${file.id}`,
        thumbnail: `https://lh3.googleusercontent.com/d/${file.id}=s800`,
      }));
    } catch (error) {
      console.error("Error fetching files:", error);
      return [];
    }
  }

  async buildImageData() {
    this.isLoading = true;
    this.cdr.detectChanges();

    try {
      const level2Folders = await this.fetchLevel2Folders();
      const result = [];

      for (const level2 of level2Folders) {
        const level3Folders = await this.fetchLevel3Folders(level2.id);
        for (const folder of level3Folders) {
          const images = await this.listFiles(folder.id);
          if (images.length > 0) {
            result.push({
              name: folder.name,
              images,
              parentName: level2.name.toLowerCase().trim(), // Filter match ke liye clean name
            });
          }
        }
      }

      this.portfolioData = result;
    } catch (error) {
      console.error("Error building image data:", error);
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges(); // UI ko update karne ke liye zaroori hai
    }
  }

  filterWorks(filter: string) {
    this.activeFilter = filter.toLowerCase().trim();
  }

  openModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalImageUrl = '';
  }
}